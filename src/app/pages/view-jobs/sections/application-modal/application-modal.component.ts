import { Component, Input, OnInit } from "@angular/core";
import { JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-application-modal",
  templateUrl: "./application-modal.component.html",
  styleUrls: ["./application-modal.component.scss"],
})
export class ApplicationModalComponent implements OnInit {
  @Input() jobId: string;
  applications = [];
  message = "";

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getAllApplications(this.jobId).subscribe((applications) => {
      if (applications.data) {
        this.applications = applications.data;
      } else {
        this.message =
          applications.message ||
          "No candidates have applied for the job posting";
      }
    });
  }
}
