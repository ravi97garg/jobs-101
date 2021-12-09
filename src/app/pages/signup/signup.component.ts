import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import {
	AuthenticationService,
	SignupResponse,
} from "src/app/services/authentication.service";
import { JobsService } from "src/app/services/jobs.service";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
	errors = {};
	fields = [
		{
			label: "I'm a",
			value: "",
			id: "userRole",
			type: "radio",
			options: [
				{ label: "Recruiter", value: 0, default: true },
				{ label: "Candidate", value: 1 },
			],
			validators: [
				{
					type: "required",
					rule: Validators.required,
					message: "User Role is mandatory.",
				},
			],
			className: "col-span-2",
		},
		{
			label: "Full Name",
			placeholder: "Enter your full name",
			value: "",
			id: "name",
			type: "text",
			validators: [
				{
					type: "required",
					rule: Validators.required,
					message: "Full Name is mandatory.",
				},
			],
			className: "col-span-2",
		},
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
			label: "Create Password",
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
		},
		{
			label: "Confirm Password",
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
		},
		{
			label: "Skills",
			placeholder: "Enter your Skills",
			value: "",
			id: "skills",
			type: "text",
			validators: [
				{
					type: "required",
					rule: Validators.required,
					message: "Skills is mandatory.",
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
		this.authService.createUser(values).subscribe(
			(res: SignupResponse) => {
				this.cookieService.set("AUTH_TOKEN", res.data.token);
				this.cookieService.set("AUTH_USER", JSON.stringify(res.data));
				this.router.navigate(["/viewJobs"]);
				this.errors = {};
			},
			(err) => {
				let errObj = {};
				err.error.errors.forEach((e) => {
					errObj = { ...errObj, ...e };
				});
				this.errors = errObj;
			}
		);
	}
}
