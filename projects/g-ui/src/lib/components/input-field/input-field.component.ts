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
  @Input() type: 'text' | 'password';

  get control(): FormControl {
    return this.form?.get(this.controlName) as FormControl;
  }
}
