import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"],
})
export class CompaniesComponent implements OnInit {
  companies = [
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
    { imageUrl: "../../../../assets/google.svg" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
