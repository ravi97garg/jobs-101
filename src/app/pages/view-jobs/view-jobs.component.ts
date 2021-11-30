import { Component, OnInit } from "@angular/core";
import { JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-view-jobs",
  templateUrl: "./view-jobs.component.html",
  styleUrls: ["./view-jobs.component.scss"],
})
export class ViewJobsComponent implements OnInit {
  applicationModal: boolean = false;
  jobs = [];
  jobId = "";

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res) => {
      //   if (res && res.data) {
      //     this.jobs = res.data;
      //   }
    });
  }

  viewApplications(job) {
    this.applicationModal = true;
    this.jobId = job.id;
  }

  closeApplications() {
    this.applicationModal = false;
    this.jobId = "";
  }
}
