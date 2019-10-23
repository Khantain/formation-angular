import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailAnimalComponent } from '../features/animaux/detail/detail.component';
import { DetailSoigneurComponent } from '../features/soigneurs/detail/detail.component';
import { FirstLetterUppercasePipe } from './first-letter-uppercase.pipe';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';

@NgModule({
  declarations: [NavbarComponent, TableComponent, ModalComponent, FirstLetterUppercasePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ModalModule,
    CommonModule,
    NavbarComponent,
    TableComponent,
    ModalComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DetailAnimalComponent,
    DetailSoigneurComponent
  ],
  providers: [NgbActiveModal, TableService]
})
export class SharedModule { }
