import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ButtonComponent } from "./components/button/button.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { WhyUsComponent } from "./pages/home/sections/why-us/why-us.component";
import { CompaniesComponent } from "./pages/home/sections/companies/companies.component";
import { InputComponent } from "./components/input/input.component";
import { FormComponent } from "./components/form/form.component";
import { RadioComponent } from "./components/radio/radio.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./pages/signup/signup.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { ViewJobsComponent } from "./pages/view-jobs/view-jobs.component";
import { PostJobComponent } from "./pages/post-job/post-job.component";
import { ModalComponent } from './components/modal/modal.component';
import { ApplicationModalComponent } from './pages/view-jobs/sections/application-modal/application-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ButtonComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    WhyUsComponent,
    CompaniesComponent,
    InputComponent,
    FormComponent,
    RadioComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ViewJobsComponent,
    PostJobComponent,
    ModalComponent,
    ApplicationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
