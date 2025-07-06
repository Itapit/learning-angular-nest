import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [RouterModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class SigninComponent {
  signInTitle=  signal('Sign in');
}
