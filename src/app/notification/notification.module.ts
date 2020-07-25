import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { NotificationRoutingModule } from "./notification-routing.module";
import { NotificationComponent } from "./notification.component";

@NgModule({
  imports: [SharedModule, NotificationRoutingModule],
  declarations: [NotificationComponent],
  providers: [],
})
export class NotificationModule {}
