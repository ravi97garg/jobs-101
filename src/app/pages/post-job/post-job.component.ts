import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CreateJobResponse, JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.scss"],
})
export class PostJobComponent implements OnInit {
  formError = "";
  errors = {};
  fields = [
    {
      label: "Job title",
      placeholder: "Enter job title",
      value: "",
      id: "title",
      type: "text",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "This field is mandatory.",
        },
      ],
      className: "col-span-2",
    },
    {
      label: "Description",
      placeholder: "Enter job description",
      value: "",
      id: "description",
      type: "textarea",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "This field is mandatory.",
        },
      ],
      className: "col-span-2",
    },
    {
      label: "Location",
      placeholder: "Enter location",
      value: "",
      id: "location",
      type: "text",
      validators: [
        {
          type: "required",
          rule: Validators.required,
          message: "This field is mandatory.",
        },
      ],
      className: "col-span-2",
    },
  ];

  constructor(private jobService: JobsService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(values) {
    this.jobService
      .createJob(values.title, values.description, values.location)
      .subscribe(
        (res: CreateJobResponse) => {
          this.router.navigate(["/viewJobs"]);
        },
        (err) => {
          if (err.status === 403) {
            this.formError = "Only Recruiters can post Jobs.";
          } else if (err.status === 422) {
            let errObj = {};
            err.error.errors.forEach((e) => {
              errObj = { ...errObj, ...e };
            });
            this.errors = errObj;
          }
        }
      );
  }
}
