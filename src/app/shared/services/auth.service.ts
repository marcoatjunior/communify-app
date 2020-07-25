import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "environment";
import { User } from "@shared/models/user";

@Injectable({ providedIn: "root" })
export class AuthService {
  public gapiSetup: boolean = false;
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  ngOnInit(): void {}

  async authenticate(): Promise<void> {
    await this.awaitGoogleInit();
    return new Promise((resolve) => resolve("authenticationLogin")).then(() =>
      this.authInstance.signIn().then(
        (user) => this.storeUser(user),
        (error) => console.log(error)
      )
    );
  }

  private async awaitGoogleInit(): Promise<void> {
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
  }

  private async initGoogleAuth(): Promise<void> {
    const pload = this.resolveAuthLoad();
    return pload.then(async () => {
      const { credentials } = environment;
      const { client_id } = credentials;
      await gapi.auth2.init({ client_id }).then((auth) => {
        this.gapiSetup = true;
        this.authInstance = auth;
      });
    });
  }

  private resolveAuthLoad(): Promise<void> {
    return new Promise((resolve) => gapi.load("auth2", resolve));
  }

  private storeUser(user: gapi.auth2.GoogleUser): void {
    const currentUser = this.buildCurrentUser(user);
    this.currentUserSubject.next(currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  private buildCurrentUser(user: gapi.auth2.GoogleUser): User {
    localStorage.setItem("credential", JSON.stringify(user));
    const basicProfile = user.getBasicProfile();
    const authResponse = user.getAuthResponse();
    return {
      name: `${basicProfile.getName()}`,
      classroomEmailAddress: basicProfile.getEmail(),
      urlPhoto: basicProfile.getImageUrl(),
      token: authResponse.id_token,
    } as User;
  }

  logout(): void {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
