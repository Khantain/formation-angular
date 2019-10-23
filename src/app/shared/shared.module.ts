import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule,
  ],
  exports: [
    ModalModule,
    CommonModule,
    NavbarComponent
  ]
})
export class SharedModule { }
