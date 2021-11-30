import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { API_BASE_URL } from "../constants";

export interface HttpResponse<T> {
  status?: number;
  data: T;
}

export class User {
  id: string;
  email: string;
  name: string;
  skills: string;
  userRole: number;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface SignupRequest {
  email: string;
  name: string;
  skills: string;
  userRole: number;
  password: string;
  confirmPassword: string;
}

export interface SignupResponse {
  message: string;
  success: boolean;
  code: number;
  data: User;
}

export interface ResetPasswordResponse {
  data: {
    id: string;
    token: string;
    email: string;
    valid: boolean;
    updatedAt: string;
    createdAt: string;
  };
  code: number;
  success: boolean;
}

export interface ChangePasswordResponse {
  data: {
    id: string;
    email: string;
    name: string;
    skills: string;
    userRole: number;
    createdAt: string;
    updatedAt: string;
    token: string;
  };
  code: number;
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private authStatusListener = new Subject<boolean>();
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  getAuthStatus(email, password) {
    return this.httpClient
      .post<HttpResponse<User>>(
        `${API_BASE_URL}/api/v1/auth/login`,
        { email, password },
        { headers: { skip: "true" } }
      )
      .pipe(
        map(({ data }) => {
          const userAuth = new User();
          userAuth.id = data.id;
          userAuth.email = data.email;
          userAuth.name = data.name;
          userAuth.skills = data.skills;
          userAuth.userRole = data.userRole;
          userAuth.createdAt = data.createdAt;
          userAuth.updatedAt = data.updatedAt;
          userAuth.token = data.token;
          this.cookieService.set("AUTH_TOKEN", data.token);
          this.cookieService.set("AUTH_USER", JSON.stringify(data));
          this.authStatusListener.next(true);
          return userAuth;
        })
      );
  }

  getUser() {
    const user = this.cookieService.get("AUTH_USER");
    return user;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  forgotPassword(email: string) {
    return this.httpClient.get<ResetPasswordResponse>(
      `${API_BASE_URL}/auth/resetpassword?email=${email}`
    );
  }

  changePassword(password: string, confirmPassword: string) {
    return this.httpClient.post<ChangePasswordResponse>(
      `${API_BASE_URL}/auth/resetpassword`,
      {
        password,
        confirmPassword,
        token: this.cookieService.get("PASSWORD_TOKEN"),
      }
    );
  }

  createUser(data: SignupRequest) {
    return this.httpClient.post<SignupResponse>(
      `${API_BASE_URL}/auth/register`,
      data
    );
  }
}
