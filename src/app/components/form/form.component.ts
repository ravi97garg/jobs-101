import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() fields: any[];
  @Output() onSubmit = new EventEmitter();
  @Input() submitBtnLabel: string;
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
}
