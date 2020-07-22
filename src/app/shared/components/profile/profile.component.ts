import { Component, OnInit } from "@angular/core";
import { AuthService } from '@shared/services/auth.service';
import { User } from '@shared/models/user';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((x) => (this.user = x));
  }
}
