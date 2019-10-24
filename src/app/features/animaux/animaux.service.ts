import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal } from '../../shared/models/animal';
import { Alimentation } from 'src/app/shared/models/alimentation';
import { Famille } from 'src/app/shared/models/famille';

const animaux: Animal[] = [
  {
    id: 1,
    nom: 'Teddy',
    dateNaissance: new Date(),
    estMalade: true,
    poids: 32.5,
    alimentation: 1,
    famille: 1
  },
  {
    id: 2,
    nom: 'Boule',
    dateNaissance: new Date(),
    estMalade: false,
    poids: 5,
    alimentation: 3,
    famille: 3
  },
  {
    id: 3,
    nom: 'Pari',
    dateNaissance: new Date(),
    estMalade: false,
    poids: 1.5,
    alimentation: 2,
    famille: 2
  },
];

const alimentations = [
  {id: 1, nom: "croquettes"},
  {id: 2, nom: "graines"},
  {id: 3, nom: "viande"},
];

const familles = [
  {id: 1, nom: "canidé"},
  {id: 2, nom: "oiseau"},
  {id: 3, nom: "félin"},
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

  getAlimentations(): Observable<Array<Alimentation>> {
    return of (alimentations);
  }
  
  getFamilles(): Observable<Array<Famille>> {
    return of (familles);
  }
}
