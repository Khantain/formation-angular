import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Animal } from '../../animal';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {

  @Input('animal') animal: Animal;
  @Input('form') form: FormGroup;

  @Output() onMaladieChange: EventEmitter<boolean>;
  subscription: Subscription;

  constructor() {
    this.onMaladieChange = new EventEmitter<boolean>();
   }

  ngOnInit() {
    if (this.animal) {
      this.form.get('estMalade').patchValue(this.animal.estMalade.toString());
      this.form.get('poids').patchValue(this.animal.poids);
    }

    this.subscription = this.form.get('estMalade').valueChanges.pipe(
      tap(val => this.onMaladieChange.emit(val === 'true'))
    ).subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
