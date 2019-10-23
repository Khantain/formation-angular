import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SoigneursService } from '../soigneurs.service';
import { Soigneur } from '../soigneur';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  selectedSoigneur: Soigneur;
  modalRef: BsModalRef;

  @ViewChild('template') template

  constructor(
    private service: SoigneursService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.soigneurs$ = this.service.getSoigneurs();
  }

  voirDetail(soigneur: Soigneur) {
    this.selectedSoigneur = soigneur;
    this.modalRef = this.modalService.show(this.template);
  }

  hideModal() {
    this.modalRef.hide()
  }
}