import { Component, OnInit } from '@angular/core';
import { NotificationService } from './core/notifications/notification.setvice';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notification: string;
  showNotification: boolean;

  constructor(private _notificationService: NotificationService) {
  }
  ngOnInit(): void {
    this._notificationService
      .notification$
      .subscribe(message => {
        this.notification = message;
        this.showNotification = !isNullOrUndefined(message);
      });

  }
}
