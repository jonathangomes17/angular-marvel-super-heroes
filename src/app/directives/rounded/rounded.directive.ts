import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appRounded]',
})
export class RoundedDirective implements OnInit {

  @Input() borderRadius: string = '100px'

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.borderRadius = this.borderRadius
  }
}
