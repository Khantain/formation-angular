import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [
  { path: 'soigneurs',  component: ListeComponent },
  { path: 'soigneur/:id', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SoigneursRoutingModule { }