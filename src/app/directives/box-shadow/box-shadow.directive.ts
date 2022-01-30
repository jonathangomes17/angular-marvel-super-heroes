import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appBoxShadow]',
})
export class BoxShadowDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  }
}
