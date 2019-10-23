import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AnimauxRoutingModule } from './animaux-routing.module';
import { DetailAnimalComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { IdentificationComponent } from './detail/identification/identification.component';
import { SanteComponent } from './detail/sante/sante.component';
import { AlimentationComponent } from './detail/alimentation/alimentation.component';


@NgModule({
  declarations: [
    ListeComponent,
    DetailAnimalComponent,
    IdentificationComponent,
    SanteComponent,
    AlimentationComponent
  ],
  imports: [
    SharedModule,
    AnimauxRoutingModule
  ]
})
export class AnimauxModule { }
