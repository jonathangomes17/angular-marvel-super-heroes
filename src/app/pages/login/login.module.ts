import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxShadowDirectiveModule } from 'src/app/directives/box-shadow/box-shadow.module';
import { RoundedDirectiveModule } from 'src/app/directives/rounded/rounded.module';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPageComponent } from './login.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    LoginPageRoutingModule,
    RoundedDirectiveModule,
    BoxShadowDirectiveModule,
    FormErrorModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
