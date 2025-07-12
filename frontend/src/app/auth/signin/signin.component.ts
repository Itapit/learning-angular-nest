import { Component } from '@angular/core';
import { FormFieldConfig } from '../../shared/generic-form/interfaces/form-field-config';
import { FieldType } from '../../shared/generic-form/enums/field-type.enum';
import { InputType } from '../../shared/generic-form/enums/input-type.enum';
import { Validators } from '@angular/forms';
import { HttpClientService } from '../http-client.service';
import { SigninDto } from '../dto/signin.dto';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private auth: HttpClientService) {}
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

  formInvalidGuard(): boolean {
    return false;
  }

  onSignin(formData: SigninDto) {
    console.log('Received form data:', formData);
    this.auth.signin(formData).subscribe({
      next: res => console.log("signin response", res),
      error: err => console.log("signin error", err),
    })
  }
}
