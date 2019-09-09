import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class BebesService {
  cargadoBebes = true;
  bebes: LineasInfo[] = [];
  bebesRFL = [];
  bebesRFC = [];
  bebesRFP = [];
  bebesRCL = [];
  bebesRCC = [];
  bebesRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarBebes();
  }

  private cargarBebes() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.bebes = resp;
            this.bebesRFL = this.bebes[5].rutinafacial.limpieza;
            this.bebesRFC = this.bebes[5].rutinafacial.cuidado;
            this.bebesRFP = this.bebes[5].rutinafacial.proteccion;
            this.bebesRCL = this.bebes[5].rutinacorporal.limpieza;
            this.bebesRCC = this.bebes[5].rutinacorporal.cuidado;
            this.bebesRCP = this.bebes[5].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoBebes = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
