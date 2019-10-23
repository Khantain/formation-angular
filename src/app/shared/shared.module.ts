import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailAnimalComponent } from '../features/animaux/detail/detail.component';
import { DetailSoigneurComponent } from '../features/soigneurs/detail/detail.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [NavbarComponent, TableComponent, ModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule,
  ],
  exports: [
    ModalModule,
    CommonModule,
    NavbarComponent,
    TableComponent,
    ModalComponent
  ],
  entryComponents: [
    DetailAnimalComponent,
    DetailSoigneurComponent
  ],
  providers: [NgbActiveModal]
})
export class SharedModule { }
