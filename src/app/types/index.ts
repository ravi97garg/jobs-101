import { ValidatorFn } from "@angular/forms";

export type Field = {
  label: string;
  value: string;
  id: string;
  type: "text" | "password" | "radio";
  options: Option[];
  validators: Validator[];
  className: string;
};

export type Option = {
  label: string;
  value: string;
  default?: boolean;
};

export type Validator = {
  type: string;
  rule: ValidatorFn;
  message: string;
};
