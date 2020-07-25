import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environment";
import { User } from "@shared/models/user";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  findByClassroom(email: String): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users?email=${email}`);
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
  }
}
