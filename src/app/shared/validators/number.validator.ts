import { ValidatorFn, AbstractControl } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value === '32';
    // const forbidden = (control.value as string).match(/12/);
    return forbidden ? { 'notNumber': true } : null;
  };
}