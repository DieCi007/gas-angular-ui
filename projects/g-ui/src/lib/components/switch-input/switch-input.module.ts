import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchInputComponent } from './switch-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SwitchInputComponent],
  exports: [SwitchInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SwitchInputModule { }
