import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class ComplicacionesService {
  cargadoComplicaciones = true;
  complicaciones: LineasInfo[] = [];
  complicacionesRFL = [];
  complicacionesRFC = [];
  complicacionesRFP = [];
  complicacionesRCL = [];
  complicacionesRCC = [];
  complicacionesRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarComplicaciones();
  }

  private cargarComplicaciones() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.complicaciones = resp;
            this.complicacionesRFL = this.complicaciones[8].rutinafacial.limpieza;
            this.complicacionesRFC = this.complicaciones[8].rutinafacial.cuidado;
            this.complicacionesRFP = this.complicaciones[8].rutinafacial.proteccion;
            this.complicacionesRCL = this.complicaciones[8].rutinacorporal.limpieza;
            this.complicacionesRCC = this.complicaciones[8].rutinacorporal.cuidado;
            this.complicacionesRCP = this.complicaciones[8].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoComplicaciones = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
