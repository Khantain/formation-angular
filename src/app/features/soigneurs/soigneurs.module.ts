import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailSoigneurComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { SoigneursRoutingModule } from './soigneurs-routing.module';

@NgModule({
  declarations: [ListeComponent, DetailSoigneurComponent],
  imports: [
    SharedModule,
    SoigneursRoutingModule
  ]
})
export class SoigneursModule { }
