import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingComponent } from "./components/loading/loading.component";
import { ProfileComponent } from "./components/profile/profile.component";

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  declarations: [NavbarComponent, LoadingComponent, ProfileComponent],
  exports: [
    CommonModule,
    ScrollingModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NavbarComponent,
    LoadingComponent,
    ProfileComponent,
  ],
})
export class SharedModule {}
