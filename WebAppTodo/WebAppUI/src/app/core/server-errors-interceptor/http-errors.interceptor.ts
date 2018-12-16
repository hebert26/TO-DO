import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorContext } from '../index';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error) => {
                    const newContext: ErrorContext = {
                        name: null,
                        appId: null,
                        time: new Date().getTime(),
                        location: null,
                        status: null,
                        message: null,
                        stack: null
                    };
                    if (error.error instanceof ErrorEvent) {
                        newContext.message = error.message;
                    } else {
                        newContext.message = error.message;
                        newContext.status = error.status;
                    }

                    return throwError(newContext);
                }));
    }
}
