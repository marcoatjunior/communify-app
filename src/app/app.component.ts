import { Component, OnInit } from "@angular/core";
import { AuthService } from '@shared/services/auth.service';
import { User } from '@shared/models/user';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  currentUser: User;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  }
}
