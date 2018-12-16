import { Injectable, Injector } from '@angular/core';
import { Router, NavigationError } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { ErrorContext } from '../index';
import { fakeHttpService } from './fakeHttpService';
import { Observable } from 'rxjs';


@Injectable()
export class ErrorsService {
    constructor(private injector: Injector, private router: Router) {
        // Subscribe to the NavigationError
        this.router
            .events
            .subscribe((event: any) => {
                if (event instanceof NavigationError) {
                    // Redirect to the ErrorComponent
                    this.log(event.error)
                        .subscribe((errorWithContext) => {
                            this.router.navigate(['/error'], { queryParams: errorWithContext });
                        });
                }
            });
    }

    log(error: ErrorContext): Observable<any> {
        return fakeHttpService.post(this.addContextInfo(error));
    }
    addContextInfo(context: ErrorContext): any {
        const newContext: ErrorContext = {
            name: context.name,
            appId: 'todo-appi',
            time: new Date().getTime(),
            location: this.injector.get(LocationStrategy),
            status: context.status,
            message: context.message,
            stack: context.stack
        };
        return newContext;
    }

}


