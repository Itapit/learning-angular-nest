import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { SignupComponent } from './signup/signup.component';
import { GenericFormModule } from '../shared/generic-form/generic-form-module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GenericFormModule
  ],
})
export class AuthModule { }
