import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DetailSoigneurComponent } from '../detail/detail.component';
import { Soigneur } from '../../../core/models/soigneur';
import { SoigneursService } from '../soigneurs.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  readonly headers = [
    'nom',
    'prenom'
  ];

  soigneurs$: Observable<Array<Soigneur>>;

  constructor(
    private service: SoigneursService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.soigneurs$ = this.service.getSoigneurs();
  }

  voirDetail(soigneur: Soigneur) {
    const modalRef = this.modalService.open(DetailSoigneurComponent);
    modalRef.componentInstance.soigneur = soigneur;
  }
}