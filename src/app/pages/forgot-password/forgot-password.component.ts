import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import {
  AuthenticationService,
  ResetPasswordResponse,
} from "src/app/services/authentication.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  fields = [
    {
      label: "Email Address",
      placeholder: "Enter your Email",
      value: "",
      id: "email",
      type: "text",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "Email Address is mandatory.",
        },
        {
          type: "email",
          rule: Validators.email,
          message: "Invalid email address.",
        },
      ],
      className: "col-span-2",
    },
  ];

  constructor(
    private authService: AuthenticationService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(values) {
    this.authService
      .forgotPassword(values.email)
      .subscribe((res: ResetPasswordResponse) => {
        this.cookieService.set("AUTH_TOKEN", res.data.token);
        this.cookieService.set("AUTH_USER", JSON.stringify(res.data));
        this.cookieService.set("PASSWORD_TOKEN", res.data.token);
        this.router.navigate(["/resetPassword"]);
      });
  }
}
