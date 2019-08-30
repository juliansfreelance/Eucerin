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


const app_routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'antiedad25', component: EdadtwentyComponent },
    { path: 'antiedad35', component: EdadthirtyComponent },
    { path: 'antiedad45', component: EdadfortyComponent },
    { path: 'antipigmento', component: AntipigmentoComponent },
    { path: 'pielgrasaomixta', component: GrasaComponent },
    { path: 'bebesyniños', component: BebesComponent },
    { path: 'pielsensible', component: SensibleComponent },
    { path: 'pielhipersensible', component: HipersensibleComponent },
    { path: 'pielseca', component: SecaComponent },
    { path: 'pielsecaysuscomplicaciones', component: ComplicacionesComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule ({
    imports: [
      RouterModule.forRoot ( app_routes )
    ],
    exports: [
      RouterModule
    ]

})
export class AppRoutingModule { }