import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AnimauxRoutingModule } from './animaux-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [ListeComponent, DetailComponent],
  imports: [
    SharedModule,
    AnimauxRoutingModule
  ]
})
export class AnimauxModule { }
