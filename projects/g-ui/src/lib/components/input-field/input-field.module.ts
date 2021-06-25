import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputFieldComponent],
  exports: [InputFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputFieldModule { }
