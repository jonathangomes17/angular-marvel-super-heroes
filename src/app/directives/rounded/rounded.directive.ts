import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[rounded]',
})
export class RoundedDirective {

    @Input() borderRadius: string = '100px';

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.borderRadius = this.borderRadius;
     }
}
