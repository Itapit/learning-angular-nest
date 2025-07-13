import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputType } from '../../shared/generic-form/enums/input-type.enum';
import { FormFieldConfig } from '../../shared/generic-form/interfaces/form-field-config';
import { FieldType } from '../../shared/generic-form/enums/field-type.enum';
import { SignupDto } from '../dto/signup.dto';
import { HttpClientService } from '../services/http-client.service';


@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private readonly auth: HttpClientService) {}
  signupConfig: FormFieldConfig[] = [
    {
      type: FieldType.Input,
      name: 'username',
      label: 'Username',
      inputType: InputType.Text,
      validators: [ Validators.required, Validators.minLength(5) ],
      errorMessage: 'Username is required'
    },
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

  onSignup(formData: SignupDto) {
    console.log('Received form data:', formData);
    this.auth.signup(formData).subscribe({
      next: res => console.log("signup response", res),
      error: err => console.log("signup error", err),
    })
  }
}
