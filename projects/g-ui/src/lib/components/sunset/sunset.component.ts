import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'g-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.scss']
})
export class SunsetComponent {
  @Input() width: string;
  @Input() borderRadius: string;
  @Input() raised: boolean;

  @Output() sunChange = new EventEmitter<void>();
  @Input() sunset = true;

  onDayChange(): void {
    this.sunChange.emit();
  }
}
