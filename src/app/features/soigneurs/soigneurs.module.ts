import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { SoigneursRoutingModule } from './soigneurs-routing.module';

@NgModule({
  declarations: [ListeComponent, DetailComponent],
  imports: [
    SharedModule,
    SoigneursRoutingModule
  ]
})
export class SoigneursModule { }
