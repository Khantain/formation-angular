import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Animal } from '../../../../core/models/animal';

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

  get poids(): FormControl {
    return this.form.get('poids') as FormControl;
  }
  get estMalade(): FormControl {
    return this.form.get('estMalade') as FormControl;
  }

  constructor() {
    this.onMaladieChange = new EventEmitter<boolean>();
  }

  ngOnInit() {
    if (this.animal) {
      this.estMalade.patchValue(this.animal.estMalade.toString());
      this.poids.patchValue(this.animal.poids);
      this.onMaladieChange.emit(this.animal.estMalade);
    }

    this.poids.setValidators(Validators.pattern(/^\d+([,.]\d+)?$/));
    setTimeout(() => this.poids.updateValueAndValidity());
    this.subscription = this.form.get('estMalade').valueChanges.pipe(
      tap(val => this.emitStatut(val))
    ).subscribe()
  }

  private emitStatut(val: any): void {
    return this.onMaladieChange.emit(val === 'true');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
