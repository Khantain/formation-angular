import { SoigneursRoutingModule } from './soigneurs-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListeComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    SoigneursRoutingModule
  ]
})
export class SoigneursModule { }
