import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environment";
import { Task } from "@shared/models/task";

@Injectable({ providedIn: "root" })
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Task[]> {
    const { moodleEmailAddress } = JSON.parse(
      localStorage.getItem("currentUser")
    );
    return this.httpClient.get<Task[]>(
      `${environment.apiUrl}/tasks?email=${moodleEmailAddress}`
    );
  }
}
