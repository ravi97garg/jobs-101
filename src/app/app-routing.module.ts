import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoggedInAuthGuard } from "./guards/logged-in-auth.guard";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PostJobComponent } from "./pages/post-job/post-job.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { ViewJobsComponent } from "./pages/view-jobs/view-jobs.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: "forgotPassword",
    component: ForgotPasswordComponent,
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: "resetPassword",
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "viewJobs",
    component: ViewJobsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "postJob",
    component: PostJobComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
