import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('data$') data$: Observable<any>;
  @Input('headers') headers: string[];
  @Output() onClick: EventEmitter<any>;

  @ViewChild('template') template

  selectedItem: any;
  modalRef: BsModalRef;

  constructor() {
    this.onClick = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  voirDetail(item: any) {
    this.onClick.emit(item);
  }
}
