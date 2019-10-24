import { Component, Input } from '@angular/core';
import { Soigneur } from '../../../shared/models/soigneur';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailSoigneurComponent {
  
  readonly title = 'Detail du soigneur';

  @Input('soigneur') soigneur: Soigneur;

  constructor() {
   }
}
