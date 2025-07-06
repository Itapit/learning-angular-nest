import { Component } from '@angular/core';
import { AuthField } from '../auth-form/auth-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupFields: AuthField[] = [
    { name: 'username', label:'Username', type: 'username', validators:[Validators.required, Validators.minLength(6)]},
    { name: 'email',   label: 'Email',    type: 'email',    validators: [Validators.required, Validators.email] },
    { name: 'password',label: 'Password', type: 'password', validators: [Validators.required] }
  ];

  onSignUp(data: any) {
    console.log(data)
  }
}
