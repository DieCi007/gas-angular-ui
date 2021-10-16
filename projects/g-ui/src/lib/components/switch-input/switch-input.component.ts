import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'g-switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent {

  @Input() label: string;
  @Input() form: FormGroup;
  @Input() controlName: string;

  get control(): FormControl {
    return this.form?.get(this.controlName) as FormControl;
  }

}
