import { ValidatorFn } from "@angular/forms";
import { InputType } from "./input-type.enum";
import { FieldType } from "./field-type.enum";

export interface FormFieldConfig {
  type: FieldType,
  name: string;
  label: string;
  inputType?: InputType;
  placeholder?: string;
  validators?: ValidatorFn[];
  errorMessage?: string;
}