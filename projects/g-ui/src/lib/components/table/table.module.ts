import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { InputFieldModule } from '../input-field/input-field.module';
import { CoreModule } from '../../core/core.module';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    InputFieldModule,
    CoreModule,
    ButtonModule,
    TooltipModule
  ]
})
export class TableModule { }
