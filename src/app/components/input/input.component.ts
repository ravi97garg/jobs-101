import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Validator } from "src/app/types";

interface Option {
  label: string;
  value?: string;
  href?: string;
}

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() key: FormControl;
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() error: boolean = false;
  @Input() errorMessages: Validator[] = [];
  @Input() customErrorMessage: string = "";
  @Input() type: string = "text";
  @Input() options: Option[] = [];
  @Input() extra?: Option;
  errorMessage: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.errorMessages.forEach((v) => {
      if (this.key.hasError(v.type)) {
        this.errorMessage = v.message;
      }
    });
  }
}
