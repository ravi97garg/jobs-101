import { Component, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Subscription } from "rxjs";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() imageUrl?: string;

  user: any;
  showDd = false;
  private authListenerSubs: Subscription;
  isAuthenticated: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.user = user && JSON.parse(user);
    this.isAuthenticated = !!user;
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }

  isPostJob() {
    return this.router.url === "/postJob";
  }

  isViewJobs() {
    return this.router.url === "/viewJobs";
  }

  logout() {
    console.log("hi");
    this.cookieService.delete("AUTH_USER");
    this.cookieService.delete("AUTH_TOKEN");
    this.showDd = false;
    this.router.navigate(["/"]);
  }

  toggleLogout() {
    this.showDd = !this.showDd;
  }
}
