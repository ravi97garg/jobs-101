import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import {
  AuthenticationService,
  ChangePasswordResponse,
} from "src/app/services/authentication.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  fields = [
    {
      label: "New Password",
      placeholder: "Enter your Password",
      value: "",
      id: "password",
      type: "password",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "Password is mandatory.",
        },
      ],
      className: "col-span-2",
    },
    {
      label: "Confirm new Password",
      placeholder: "Enter your Password",
      value: "",
      id: "confirmPassword",
      type: "password",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "Confirm Password is mandatory.",
        },
      ],
      className: "col-span-2",
    },
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  onSubmit(values) {
    this.authService
      .changePassword(values.password, values.confirmPassword)
      .subscribe((res: ChangePasswordResponse) => {
        this.cookieService.delete("PASSWORD_TOKEN");
        this.cookieService.set("AUTH_TOKEN", res.data.token);
        this.cookieService.set("AUTH_USER", JSON.stringify(res.data));
        this.router.navigate(["/viewJobs"]);
      });
  }
}
