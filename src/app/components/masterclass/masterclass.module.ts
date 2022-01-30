import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxShadowDirectiveModule } from 'src/app/directives/box-shadow/box-shadow.module';
import { RoundedDirectiveModule } from 'src/app/directives/rounded/rounded.module';
import { LogoModule } from '../logo/logo.module';
import { MasterClassComponent } from './masterclass.component';

@NgModule({
  declarations: [
    MasterClassComponent
  ],
  exports: [
    MasterClassComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    BoxShadowDirectiveModule,
    RoundedDirectiveModule,
    FormsModule
  ],
  providers: [],
})
export class MasterClassModule { }
