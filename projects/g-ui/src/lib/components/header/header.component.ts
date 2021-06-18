import { Component, Input} from '@angular/core';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() color = '';
  @Input() raised = true;
  @Input() height = '';

}
