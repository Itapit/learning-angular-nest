import { Component } from '@angular/core';
import { FormFieldConfig } from '../../shared/generic-form/interfaces/form-field-config';
import { FieldType } from '../../shared/generic-form/enums/field-type.enum';
import { InputType } from '../../shared/generic-form/enums/input-type.enum';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
signinConfig: FormFieldConfig[] = [
  {
    type: FieldType.Input,
    name: 'email',
    label: 'Email',
    inputType: InputType.Email,
    validators: [ Validators.required, Validators.email ],
    errorMessage: 'Please enter a valid email'
  },
  {
    type: FieldType.Input,
    name: 'password',
    label: 'Password',
    inputType: InputType.Text,
    validators: [ Validators.required ],
    errorMessage: 'Password is required'
  }
  ];

  onSignin(data: any) {
    console.log(data)
  }
}
