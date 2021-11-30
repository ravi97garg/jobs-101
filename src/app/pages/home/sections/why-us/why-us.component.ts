import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-why-us",
  templateUrl: "./why-us.component.html",
  styleUrls: ["./why-us.component.scss"],
})
export class WhyUsComponent implements OnInit {
  reasons = [
    {
      heading: "Get more visibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      heading: "Organize your candidates",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      heading: "Verify their abilities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
