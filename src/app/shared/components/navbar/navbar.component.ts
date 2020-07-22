import { Component, OnInit, ChangeDetectorRef, Input } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from "@angular/router";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() isLogged: Boolean;
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.isLogged = this.authService.currentUserValue !== null;
  }

  goToProfile() {
    this.router.navigate(["/perfil"]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
