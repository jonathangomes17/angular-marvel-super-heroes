import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formError'
})
export class FormErrorPipe implements PipeTransform {
  
  errors: { [errorKey: string]: string } = {
    email: 'Email invalid',
    required: 'Field %s required',
    minlength: 'Minimum %s characters'
  };

  transform(value: string, text: string = ''): string {
    if (text != '') {
      let error = this.errors[value] || 'Error %s undefined'
      return error.replace('%s', text);
    }
    

    return this.errors[value] || 'Error undefined';
  }
}
