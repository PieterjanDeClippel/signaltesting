import { Component, computed, input } from "@angular/core";

@Component({
    selector: 'bs-checkbox',
    template: `
        <label [class.form-switch]="isSwitch()">
            <input type="checkbox">
        </label>`
})
export class BsCheckboxComponent {
    displayStyle = input<'checkbox' | 'switch' | 'toggle_button'>('checkbox');
    isSwitch = computed(() => this.displayStyle() === 'switch');
}