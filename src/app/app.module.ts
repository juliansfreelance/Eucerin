import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EdadtwentyComponent } from './pages/edadtwenty/edadtwenty.component';
import { EdadthirtyComponent } from './pages/edadthirty/edadthirty.component';
import { EdadfortyComponent } from './pages/edadforty/edadforty.component';
import { AntipigmentoComponent } from './pages/antipigmento/antipigmento.component';
import { GrasaComponent } from './pages/grasa/grasa.component';
import { BebesComponent } from './pages/bebes/bebes.component';
import { SensibleComponent } from './pages/sensible/sensible.component';
import { HipersensibleComponent } from './pages/hipersensible/hipersensible.component';
import { SecaComponent } from './pages/seca/seca.component';
import { ComplicacionesComponent } from './pages/complicaciones/complicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    EdadtwentyComponent,
    EdadthirtyComponent,
    EdadfortyComponent,
    AntipigmentoComponent,
    GrasaComponent,
    BebesComponent,
    SensibleComponent,
    HipersensibleComponent,
    SecaComponent,
    ComplicacionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
