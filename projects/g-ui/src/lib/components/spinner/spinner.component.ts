import { Component, Input} from '@angular/core';

@Component({
  selector: 'g-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() height = '5rem';
  @Input() width = '5rem';

}
