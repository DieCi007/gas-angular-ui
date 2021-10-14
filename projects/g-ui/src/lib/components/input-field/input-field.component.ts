import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'g-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() autofocus = false;
  @Input() autocomplete: string;
  @Input() type: 'text' | 'password' = 'text';
  @Input() font: 'normal' | 'large' = 'large';
  @Input() width = '100%';
  @Input() textAlign: string | 'center';

  isActive(): boolean {
    const val = this.control.value;
    return val !== null && val !== undefined && (val === 0 || !!val);
  };

  get control(): FormControl {
    return this.form?.get(this.controlName) as FormControl;
  }

}
