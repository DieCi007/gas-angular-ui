import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'g-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() borderRadius = '20px';
  @Input() height: string;
  @Input() width: string;
  @Input() resizable = false;
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() draggable: boolean;
  @Input() position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  @Input() zIndex = 100;
  @Input() appendToBody = false;
}
