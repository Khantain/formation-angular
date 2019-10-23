import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { Observable, of } from 'rxjs';

const animaux: Animal[] = [
  {
    id: 1,
    nom: 'Teddy',
    dateNaissance: new Date(),
    estMalade: true,
    poids: 32.5,
    alimentation: "viande",
    famille: "canidé"
  },
  {
    id: 2,
    nom: 'Boule',
    dateNaissance: new Date(),
    estMalade: false,
    poids: 5,
    alimentation: "croquette",
    famille: "felin"
  },
  {
    id: 1,
    nom: 'Pari',
    dateNaissance: new Date(),
    estMalade: false,
    poids: 1.5,
    alimentation: "graines",
    famille: "oiseau"
  },
];

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {

  constructor() { }

  getAnimaux(): Observable<Animal[]> {
    return of(animaux);
  }
}
