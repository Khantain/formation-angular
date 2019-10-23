import { Soigneur } from './soigneur';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const soigneurs: Soigneur[] = [
  { id: 1, nom: 'Dupont', prenom: 'Antoine' },
  { id: 2, nom: 'Martin', prenom: 'Véronique' },
  { id: 3, nom: 'Durand', prenom: 'Claire' },
];

@Injectable({
  providedIn: 'root'
})
export class SoigneursService {

  constructor() { }

  getSoigneurs(): Observable<Array<Soigneur>> {
    return of(soigneurs);
  }
}
