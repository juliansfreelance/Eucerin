import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
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
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

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
    ComplicacionesComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
