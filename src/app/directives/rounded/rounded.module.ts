import { NgModule } from '@angular/core';
import { RoundedDirective } from './rounded.directive';

@NgModule({
  declarations: [
    RoundedDirective
  ],
  exports: [
    RoundedDirective
  ]
})
export class RoundedDirectiveModule { }
