import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'g-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() type: 'submit' | 'button' = 'button';
  @Output() clicked = new EventEmitter<void>();
  @Input() width = '100%';
  @Input() height = '2rem';
  @Input() color: 'primary' | 'secondary' | 'danger' | string = 'primary';

  onButtonClicked(event: MouseEvent): void {
    this.clicked.emit();
  }
}
