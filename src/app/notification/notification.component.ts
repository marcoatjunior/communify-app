import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { flatMap } from "rxjs/operators";
import { NotificationService } from "@shared/services/notification.service";
import * as moment from "moment";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  sentNotification: String[] = [];
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    interval(1 * 60 * 1000)
      .pipe(flatMap(() => this.notificationService.send()))
      .subscribe(() =>
        this.sentNotification.push(
          `Notificações enviadas... ${moment().format("DD/MM/YYYY H:mm:ss")}`
        )
      );
  }
}
