import { Component, OnInit } from "@angular/core";
import { AuthService } from "@shared/services/auth.service";
import { Router } from "@angular/router";
import { User } from "@shared/models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  async authenticate(): Promise<void> {
    await this.authService
      .authenticate()
      .then(() => this.router.navigate(["steps"]));
  }
}
