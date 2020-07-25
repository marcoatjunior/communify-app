import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environment";
import { CourseWork } from "@shared/models/course-work";

@Injectable({ providedIn: "root" })
export class CourseWorkService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<CourseWork[]> {
    return this.httpClient.get<CourseWork[]>(`${environment.apiUrl}/courseWorks`);
  }
}
