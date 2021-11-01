import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab.component';



@NgModule({
  declarations: [FabComponent],
  exports: [FabComponent],
  imports: [
    CommonModule
  ]
})
export class FabModule { }
