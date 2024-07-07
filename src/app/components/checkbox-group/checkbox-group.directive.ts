import { Directive, contentChildren, forwardRef, input } from '@angular/core';
import { BsCheckboxComponent } from '../checkbox/checkbox.component';

@Directive({
    selector: '[bsCheckboxGroup]',
})
export class BsCheckboxGroupDirective {
    // name = input.required<string>();
    // children = contentChildren(forwardRef(() => BsCheckboxComponent));
}
