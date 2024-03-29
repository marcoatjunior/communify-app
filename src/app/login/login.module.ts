import { SharedModule } from "@shared/shared.module";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
