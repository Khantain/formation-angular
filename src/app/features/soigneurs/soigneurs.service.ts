import { Soigneur } from './soigneur';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const soigneurs: Soigneur[] = [
  { id: 1, nom: 'Dupont', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', prenom: 'Antoine' },
  { id: 2, nom: 'Martin', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', prenom: 'Véronique' },
  { id: 3, nom: 'Durand', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', prenom: 'Claire' },
];

@Injectable({
  providedIn: 'root'
})
export class SoigneursService {

  constructor() { }

  getSoigneurs(): Observable<Soigneur[]> {
    return of(soigneurs);
  }
}
