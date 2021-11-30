import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { API_BASE_URL } from "../constants";

export class Job {
  title: string;
  description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Application {
  email: string;
  id: string;
  name: string;
  skills: string;
}

interface GetJobsResponse {
  data: Job[];
}

export interface CreateJobResponse {
  data: {
    id: string;
    title: string;
    description: string;
    location: boolean;
    updatedAt: string;
    createdAt: string;
  };
  code: number;
  success: boolean;
}

interface GetApplicationsResponse {
  code: number;
  success: boolean;
  message?: string;
  data?: Application[];
}

@Injectable({
  providedIn: "root",
})
export class JobsService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  getAllJobs(): Observable<GetJobsResponse> {
    return this.httpClient.get<GetJobsResponse>(`${API_BASE_URL}/jobs?`);
  }

  getAllApplications(jobId: string): Observable<GetApplicationsResponse> {
    return this.httpClient.get<GetApplicationsResponse>(
      `${API_BASE_URL}/recruiters/jobs/${jobId}/candidates`,
      {
        headers: {
          Authorization: this.cookieService.get("AUTH_TOKEN"),
        },
      }
    );
  }

  createJob(title: string, description: string, location: string) {
    return this.httpClient.post<CreateJobResponse>(
      `${API_BASE_URL}/jobs/`,
      {
        title,
        description,
        location,
      },
      {
        headers: {
          Authorization: this.cookieService.get("AUTH_TOKEN"),
        },
      }
    );
  }
}
