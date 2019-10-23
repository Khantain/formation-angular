import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [
  { path: 'animaux',  component: ListeComponent },
  { path: 'animal/:id', component: DetailAnimalComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnimauxRoutingModule { }