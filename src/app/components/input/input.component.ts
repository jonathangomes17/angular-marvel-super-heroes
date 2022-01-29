import {
  Component,
  forwardRef,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() placeholder = 'Texto';

  @Input() value = '';

  @Input() disabled = false;

  @Input() separator = null;

  @Input() type: string = 'text';

  @Input() readonly = false;  

  @Input() invalid = false;

  private onTouched = () => {};

  private onChanged = (_: string) => {};

  handleValue(value: string): void {
    let newValue: any = value;

    if (newValue !== '' && this.separator) {
      newValue = value.split(this.separator);
    }

    this.onTouched();
    this.onChanged(newValue);
    this.value = value;
  }

  writeValue(value: any): void {
    if (value && Array.isArray(value)) {
      const separator = this.separator || ',';
      const newValue = value.join(separator);

      this.onTouched();
      this.onChanged(newValue);
    }

    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
