import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunsetComponent } from './sunset.component';



@NgModule({
  declarations: [SunsetComponent],
  exports: [SunsetComponent],
  imports: [
    CommonModule
  ]
})
export class SunsetModule { }
