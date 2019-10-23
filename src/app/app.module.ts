import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AnimauxModule } from './features/animaux/animaux.module';
import { SoigneursModule } from './features/soigneurs/soigneurs.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ErreurPageComponent
  ],
  imports: [
    BrowserModule,
    SoigneursModule,
    AnimauxModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
