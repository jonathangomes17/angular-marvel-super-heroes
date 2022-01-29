import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxShadowDirectiveModule } from 'src/app/directives/box-shadow/box-shadow.module';
import { RoundedDirectiveModule } from 'src/app/directives/rounded/rounded.module';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPageComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RegisterPageRoutingModule,
    RoundedDirectiveModule,
    BoxShadowDirectiveModule,
    FormErrorModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterPageModule { }
