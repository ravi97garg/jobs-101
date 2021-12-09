import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Field } from "src/app/types";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() fields: Field[];
  @Output() onSubmit = new EventEmitter();
  @Input() submitBtnLabel: string;
  @Input() errors: Record<string, string> = {};
  @Input() formError: string = "";
  formGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.fields.forEach((field) => {
      const validatorArray = field.validators.map((v) => v.rule);
      this.formGroup.addControl(
        field.id,
        new FormControl(field.value, validatorArray)
      );
    });
  }

  ngOnChanges(changes): void {
    if (
      changes["errors"] &&
      changes["errors"].previousValue != changes["errors"].currentValue &&
      changes["errors"].currentValue
    ) {
      for (let key in changes["errors"].currentValue) {
        this.formGroup.controls[key].setErrors({
          error: true,
        });
        this.formGroup.controls;
      }
    }
  }
}
