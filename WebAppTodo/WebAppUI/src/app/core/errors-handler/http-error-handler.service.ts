import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NotificationService } from '../notifications/notification.setvice';
import { ErrorsService } from '../errors-service/errors.service';
export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;


@Injectable()
export class HttpErrorHandlerService {
    constructor(private injector: Injector) {

    }

    createHandleError = (serviceName = '') => <T>
        (action = 'operation', result = {} as T) => this.handleError(serviceName, action, result)

    handleError<T>(serviceName = '', action = 'operation', result = {} as T) {

        return (errorContext: any): Observable<T> => {
            console.log(serviceName);
            console.log(action);
            const notificationService = this.injector.get(NotificationService);
            const errorsService = this.injector.get(ErrorsService);

            if (!navigator.onLine) {
                notificationService.notify('No Internet Connection');
            } else {
                errorsService.log(errorContext).subscribe();
                notificationService.notify(`${errorContext.status} - ${errorContext.message}`);
            }

            return of(result);
        };

    }
}
