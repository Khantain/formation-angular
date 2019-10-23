import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';

const routes: Routes = [
  { path: 'soigneurs',
    loadChildren: () => import('./soigneurs/soigneurs.module').then(m => m.SoigneursModule)
  },
  { path: 'animaux',
    loadChildren: () => import('./animaux/animaux.module').then(m => m.AnimauxModule)
  }, 
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: ErreurPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
