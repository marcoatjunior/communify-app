import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environment";

@Injectable({ providedIn: "root" })
export class TermService {
  constructor(private httpClient: HttpClient) {}

  send(): Observable<void> {
    const { classroomEmailAddress } = JSON.parse(
      localStorage.getItem("currentUser")
    );
    return this.httpClient.get<void>(
      `${environment.apiUrl}/terms?email=${classroomEmailAddress}`
    );
  }
}
