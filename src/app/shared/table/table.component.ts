import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TableService } from './table.service';

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

  rsc: any;
  selectedItem: any;
  modalRef: BsModalRef;

  constructor(
    private service: TableService
  ) {
    this.onClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.service.getResources().pipe(
      tap(rsc => this.rsc = rsc)
    ).subscribe();
  }

  voirDetail(item: any) {
    this.onClick.emit(item);
  }

  traduire(cle: string) {
    return this.rsc[cle] || cle;
  }

  getValue(value: any) {
    switch (true) {
      case value instanceof Date:
        return value.toISOString().substring(0, 10);
      case typeof value ==='boolean':
        return value ? "Oui" : "Non";
      default:
        return value;
    }
  }
}
