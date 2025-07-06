import { Component } from '@angular/core';
import { AuthField } from '../auth-form/auth-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginFields: AuthField[] = [
    { name: 'email',   label: 'Email',    type: 'email',    validators: [Validators.required, Validators.email] },
    { name: 'password',label: 'Password', type: 'password', validators: [Validators.required] }
  ];

  onLogin(data: any) {
    console.log(data)
  }
}
