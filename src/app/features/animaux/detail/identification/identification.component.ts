import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Famille } from 'src/app/core/models/famille';
import { Animal } from '../../../../core/models/animal';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  @Input('animal') animal: Animal;
  @Input('form') form: FormGroup;
  @Input('familles') familles: Array<Famille>;

  get nom() {
    return this.form.get('nom') as FormControl;
  }

  constructor() { }

  ngOnInit() {
    if (this.animal) {
      Object.keys(this.form.controls).forEach(key => {
          this.form.get(key).patchValue(this.getValue(this.animal[key]));
      });
    }
  }

  getValue(value: any) {
    if (value instanceof Date) {
      // pour un input de type date on doit passer la date sous forme de string au format YYYY-MM-DD
      return `${value.getFullYear()}-${this.getNumberOnTwoCharacters(value.getMonth() + 1)}-${this.getNumberOnTwoCharacters(value.getDate())}`;
    }
    return value;
  }

  getNumberOnTwoCharacters(data: number): string {
    return data.toString().padStart(2, '0');
  }
}
