import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formError = "";
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
    {
      label: "Password",
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
      extra: {
        label: "Forgot your password?",
        href: "/forgotPassword",
      },
    },
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(values) {
    this.authService.getAuthStatus(values.email, values.password).subscribe(
      () => {
        this.router.navigate(["viewJobs"]);
      },
      (err) => {
        if (err.status === 401) {
          this.formError = err.error.message;
        }
      }
    );
  }
}
