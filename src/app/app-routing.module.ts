import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'antiedad25', component: EdadtwentyComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'antiedad35', component: EdadthirtyComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'antiedad45', component: EdadfortyComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'antipigmento', component: AntipigmentoComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'pielgrasaomixta', component: GrasaComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'bebesyniños', component: BebesComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'pielsensible', component: SensibleComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'pielhipersensible', component: HipersensibleComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'pielseca', component: SecaComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: 'pielsecaysuscomplicaciones', component: ComplicacionesComponent,
    children: [
      { path: 'item/:id', component: ItemComponent }
    ]},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule ({
    imports: [
      RouterModule.forRoot ( appRoutes, { useHash: true }  )
    ],
    exports: [
      RouterModule
    ]

})
export class AppRoutingModule { }
