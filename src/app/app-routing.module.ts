import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@shared/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
