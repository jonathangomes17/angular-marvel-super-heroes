import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  @Output() clicked = new EventEmitter<boolean>();

  @Input() public text: string;

  @Input() public icon: string;

  @Input() public color = 'primary';

  @Input() public size = 'medium';

  @Input() public font = 'medium';

  @Input() public isCircle = true;

  @Input() public isDisabled = false;

  @Input() public isOutlined = false;

  @Input() public isAnimation = true;

  @Input() public isMarginRight = false;

  @Input() public isMarginLeft = false;

  @Input() public isPadding = true;

  public modifierColor = 'button--is-color-primary';

  public modifierSize = 'button--is-size-medium';

  public modifierFont = 'button--is-font-medium';

  public modifierCircle = 'button--is-circle';

  public modifierAnimation = 'button--is-animation';

  public modifierDisabled = '';

  public modifierMarginRight = '';

  public modifierMarginLeft = '';

  public modifierPadding = 'button--is-padding-32';

  public ngOnChanges(_: SimpleChanges): void {
    this.applyStyles();
  }

  public applyStyles(): void {
    this.modifierColor = 'button--is-color-' + this.color ?? 'primary';
    this.modifierSize = 'button--is-size-' + this.size ?? 'medium';
    this.modifierFont = 'button--is-font-' + this.font ?? 'medium';

    if (this.isDisabled) {
      this.modifierDisabled = 'button--is-disabled';
    } else {
      this.modifierDisabled = '';
    }

    if (!this.isCircle) {
      this.modifierCircle = '';
    }

    if (!this.isAnimation) {
      this.modifierAnimation = '';
    }

    if (this.isOutlined) {
      this.modifierColor = 'button--is-outlined-' + this.color ?? 'primary';
      this.modifierAnimation = '';
    }

    if (this.isMarginRight) {
      this.modifierMarginRight = 'button--is-margin-right';
    }

    if (this.isMarginLeft) {
      this.modifierMarginLeft = 'button--is-margin-left';
    }

    if (!this.isPadding) {
      this.modifierPadding = 'button--is-padding-16';
    }
  }

  public onClick(): void {
    if (this.isDisabled) {
      return;
    }

    this.clicked.emit(false);
  }
}
