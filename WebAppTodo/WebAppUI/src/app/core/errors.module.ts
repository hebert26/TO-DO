import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ErrorsService } from './errors-service/errors.service';
import { ErrorRoutingModule } from './errors-routing/errors-routing.module';
import { ErrorsComponent } from './errors-component/errors.component';
import { NotificationService } from './notifications/notification.setvice';
import { HttpErrorInterceptor } from './server-errors-interceptor/http-errors.interceptor';
import { HttpErrorHandlerService } from './errors-handler/http-error-handler.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ErrorRoutingModule,
    ],
    declarations: [
        ErrorsComponent
    ],
    providers: [
        ErrorsService,
        HttpErrorHandlerService,
        NotificationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
    ]
})
export class ErrorsModule { }
