import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoigneursModule } from './soigneurs/soigneurs.module';
import { AnimauxModule } from './animaux/animaux.module';
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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
