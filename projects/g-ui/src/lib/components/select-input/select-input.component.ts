import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface ISelectInputData<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'g-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent<T> implements OnInit {

  private _data: ISelectInputData<T>[];
  @Input() set data(newData: ISelectInputData<T>[]) {
    const nullValue = {
      label: '-',
      value: null
    };
    if (this.hasNull && newData) {
      newData.unshift(nullValue);
    }
    this._data = newData;
  }

  get data(): ISelectInputData<T>[] {
    return this._data;
  }

  @Output() selected = new EventEmitter<T>();
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() label: string;
  @Input() font: 'normal' | 'large' = 'large';
  @Input() requiredFieldMessage: string;
  @Input() width: string;
  @Input() hasNull = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  get control(): FormControl {
    return this.form?.get(this.controlName) as FormControl;
  }

  onSelectedChange(evt: T): void {
    this.selected.emit(evt);
  }

}
