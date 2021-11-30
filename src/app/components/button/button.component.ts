import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() variant: string = "solid";
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
