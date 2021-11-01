import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectInputComponent } from './select-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectInputComponent],
  exports: [SelectInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SelectInputModule { }
