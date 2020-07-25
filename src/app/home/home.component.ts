import { Component, OnInit } from "@angular/core";
import { CourseWork } from "@shared/models/course-work";
import { CourseWorkService } from "@shared/services/course-work.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["home.component.scss"],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ["description"];
  courseWorks$: Observable<CourseWork[]>;

  constructor(private courseWorkService: CourseWorkService) {}

  ngOnInit(): void {
    this.courseWorks$ = this.courseWorkService.get();
  }
}
