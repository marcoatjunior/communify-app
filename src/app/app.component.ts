import { Component, OnInit } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { AuthService } from "@shared/services/auth.service";
import { User } from "@shared/models/user";
import { environment } from "environment";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService, private swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: environment.validPublicKey,
        })
        .then((subscription) => {
          console.log(subscription)
        })
        .catch(console.error);
    }
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  }
}
