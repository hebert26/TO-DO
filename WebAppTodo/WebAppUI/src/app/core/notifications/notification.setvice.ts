import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { refCount, publishReplay } from 'rxjs/operators';



@Injectable()
export class NotificationService {

    private _notification: BehaviorSubject<string> = new BehaviorSubject(null);
    readonly notification$: Observable<string> = this._notification.asObservable()
        .pipe(
            publishReplay(1), // this tells Rx to cache the latest emitted
            refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
        );

    constructor() { }

    notify(message) {
        this._notification.next(message);
        setTimeout(() => this._notification.next(null), 3000);
    }

}
