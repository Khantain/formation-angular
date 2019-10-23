import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal } from './animal';

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
    id: 3,
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

  getAnimal(id: number): Observable<Animal> {
    return this.getAnimaux().pipe(
      map(animaux => animaux.find(animal => animal.id === id))
    )
  }

  checkUnicite(nom: string) {
    return this.getAnimaux().pipe(
      map(animaux => animaux.find(animal => animal.nom === nom))
    );
  }
}
