import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimauxService } from '../animaux.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  readonly headers = [
    'nom',
    'dateNaissance',
    'alimentation',
    'famille',
    'poids',
    'estMalade',
  ]
  
  animaux$: Observable<Animal[]>

  constructor(
    private service: AnimauxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.animaux$ = this.service.getAnimaux();
  }

  allerVersFiche(animalCible?: Animal) {
    this.router.navigate(['animal', animalCible ? animalCible.id : 'new']);
  }
}
