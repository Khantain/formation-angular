import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../../../../shared/models/animal';
import { Alimentation } from 'src/app/shared/models/alimentation';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
export class AlimentationComponent implements OnInit {

  @Input('animal') animal: Animal;
  @Input('form') form: FormGroup;
  @Input('alimentations') alimentations: Array<Alimentation>;

  constructor() { }

  ngOnInit() {
    if (this.animal)
      this.form.get('alimentation').patchValue(this.animal.alimentation);
  }

}
