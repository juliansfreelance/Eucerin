import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class HipersensibleService {
  cargadoHipersensible = true;
  hipersensible: LineasInfo[] = [];
  hipersensibleRFL = [];
  hipersensibleRFC = [];
  hipersensibleRFP = [];
  hipersensibleRCL = [];
  hipersensibleRCC = [];
  hipersensibleRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarHipersensible();
  }
  private cargarHipersensible() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.hipersensible = resp;
            this.hipersensibleRFL = this.hipersensible[7].rutinafacial.limpieza;
            this.hipersensibleRFC = this.hipersensible[7].rutinafacial.cuidado;
            this.hipersensibleRFP = this.hipersensible[7].rutinafacial.proteccion;
            this.hipersensibleRCL = this.hipersensible[7].rutinacorporal.limpieza;
            this.hipersensibleRCC = this.hipersensible[7].rutinacorporal.cuidado;
            this.hipersensibleRCP = this.hipersensible[7].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoHipersensible = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
