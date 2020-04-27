import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from '@shared/models/user';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSteps(): void {
    let user = new User();
    user.name = "Marco Taborda";
    user.classroom_email_address = "marco.junior0932@unilasalle.edu.br";
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(["/steps"]);
  }
}
