import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function dateFormatFactory(): ValidatorFn {
    return (c: AbstractControl) => {

        let isValid = c.value !== null;

        if (isValid) {
            return null;
        } else {
            return {
                dateFormat: {
                    valid: false
                }
            };
        }
    }
}


@Directive({
    selector: '[dateFormat][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: DateFormatValidator, multi: true }
    ]
})
export class DateFormatValidator implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = dateFormatFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}