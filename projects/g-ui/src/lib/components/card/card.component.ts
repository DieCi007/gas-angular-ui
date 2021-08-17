import { Component, Input } from '@angular/core';

@Component({
  selector: 'g-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() containerStyle: { [klass: string]: any; };

}
