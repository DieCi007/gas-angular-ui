import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustHtmlPipe } from './pipe/trust-html.pipe';
import { DefaultModalComponent } from './component/default-modal/default-modal.component';
import { ButtonModule } from '../components/button/button.module';



@NgModule({
    declarations: [TrustHtmlPipe, DefaultModalComponent],
    exports: [
        TrustHtmlPipe
    ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CoreModule { }
