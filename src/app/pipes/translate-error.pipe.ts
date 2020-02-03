import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'i18nErr'
})
export class TranslateErrorPipe implements PipeTransform {
  transform(
    errors: ValidationErrors | null,
    i18nFunc: (i18nKey: string, obj?: { [key: string]: any }) => string
  ): string {
    if (!errors) {
      return '';
    }
    const errorKeys = Object.keys(errors);
    if (errorKeys.length === 0) {
      return '';
    }
    const errorKey = errorKeys[0];
    const errorDetails = errors[errorKey];

    if (typeof errorDetails === 'object') {
      return i18nFunc(errorKey, errorDetails);
    }
    return i18nFunc(errorKey);
  }
}
