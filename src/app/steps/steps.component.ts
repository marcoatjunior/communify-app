import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "@shared/models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-steps",
  templateUrl: "steps.component.html",
  styleUrls: ["steps.component.scss"],
})
export class StepsComponent implements OnInit {
  isLinear = true;
  moodleFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  sameEmail: boolean = false;
  currentUser: User;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.moodleFormGroup = this.formBuilder.group({
      email: ["", Validators.required],
      same: [this.sameEmail],
    });
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  }

  setMoodleEmail() {
    if (this.moodleFormGroup.valid) {
      this.currentUser.moodle_email_address = this.moodleFormGroup.get("email").value;
      localStorage.setItem("user", JSON.stringify(this.currentUser));
    }
  }

  checkSameEmail() {
    this.sameEmail = !this.sameEmail;
    this.moodleFormGroup
      .get("email")
      .setValue(
        this.sameEmail ? this.currentUser.classroom_email_address : null
      );
  }

  goToHome() {
    this.router.navigate(["/"]);
  }
}
