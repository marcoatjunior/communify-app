import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

import { environment } from "environment";
import { User } from "@shared/models/user";

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login() {
    let user = new User();
    user.name = "Marco Taborda";
    user.classroom_email_address = "marco.junior0932@unilasalle.edu.br";
    user.photo =
      "https://lh3.googleusercontent.com/ogw/ADGmqu9O3xXLviGfaj3Fs0YESK5A9A_ZvdlkXjSV8Ogo0JG1j8ZnWgfg8nRIpfB6xq3KvUgzK4zctlZn6CQrs3cj-_Y8oljgd50DalL0ddtJAG76Wqs_biYCyREDmMMsRxO_Jx16pHA1lBT5sOTWTN052ZMvBRqsso1PCUhegU-sEKOnU7K7tjt5tXbevgcP7V5dVF9PiUQ0kBby1GqJ6Nt8onEmFsc9-Ve4he8_WL4yuj6MM4OYJI-54IIJ0MreF4R59dtEeU-jkSzjuW1JI1n8WOOXeA05Feqcf14vMmePjnNv3M786iSUNyiqlnNBSFE4l8V7lEDkddzNoHwgQb_o_K-e7j9YJmKRh0FvfqvY8iuZzNW-ys12SxUVTAkyH2jCHruMESKaVdt6qS8z1Hsh0lX2ZnV5E4NnqLZoV0OmyJn-7w00Nuvzmcrw9pNYQAXvgIANPaZMaABZ2RmZUCQQHLzyelrSUlcpsPFyyYJa-qBnoPVfbJhlL2F_81gToleYqeukT2sj5KfdzGvZBNeNYtsuirG_wbaRACMiAYM_XFPCRlWlzaLq-KU6OR0wSfHKH0fB0qj8UHUe2UGd3AdC20SJHi-hA4C17ehTr_1xQ3BsBIdpuNu84HjoRNe7EFycMjVBcKe_iN9kY2uaTw3_S6c=s83-c";
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
