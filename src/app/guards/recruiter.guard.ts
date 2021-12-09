import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class RecruiterGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var authUser = this.cookieService.get("AUTH_USER");
    if (!authUser || (authUser && JSON.parse(authUser).userRole)) {
      this.router.navigate(["/viewJobs"]);
      return false;
    }
    return true;
  }
}
