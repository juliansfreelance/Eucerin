import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class SecaService {
  cargadoSeca = true;
  seca: LineasInfo[] = [];
  secaRFL = [];
  secaRFC = [];
  secaRFP = [];
  secaRCL = [];
  secaRCC = [];
  secaRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarSeca();
   }

   private cargarSeca() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.seca = resp;
            this.secaRFL = this.seca[9].rutinafacial.limpieza;
            this.secaRFC = this.seca[9].rutinafacial.cuidado;
            this.secaRFP = this.seca[9].rutinafacial.proteccion;
            this.secaRCL = this.seca[9].rutinacorporal.limpieza;
            this.secaRCC = this.seca[9].rutinacorporal.cuidado;
            this.secaRCP = this.seca[9].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoSeca = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
