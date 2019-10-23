import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimauxService } from '../animaux.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  animaux$: Observable<Animal[]>

  constructor(
    private service: AnimauxService
  ) { }

  ngOnInit() {
    this.animaux$ = this.service.getAnimaux();
  }

}
