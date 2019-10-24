import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { AnimauxService } from '../../features/animaux/animaux.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueValidator implements AsyncValidator {
  constructor(private service: AnimauxService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.checkUnicite(ctrl.value).pipe(
      map(animal => (animal ? { notUnique: true } : null)),
      catchError(() => null)
    );
  }
}