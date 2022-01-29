import { NgModule } from '@angular/core';
import { BoxShadowDirective } from './box-shadow.directive';

@NgModule({
  declarations: [
    BoxShadowDirective
  ],
  exports: [
    BoxShadowDirective
  ]
})
export class BoxShadowDirectiveModule { }
