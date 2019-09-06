import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class SensibleService {
  cargadoSensible = true;
  sensible: LineasInfo[] = [];
  sensibleRFL = [];
  sensibleRFC = [];
  sensibleRFP = [];
  sensibleRCL = [];
  sensibleRCC = [];
  sensibleRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarAntipigmanto();
  }

   private cargarAntipigmanto() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.sensible = resp;
            this.sensibleRFL = this.sensible[6].rutinafacial.limpieza;
            this.sensibleRFC = this.sensible[6].rutinafacial.cuidado;
            this.sensibleRFP = this.sensible[6].rutinafacial.proteccion;
            this.sensibleRCL = this.sensible[6].rutinacorporal.limpieza;
            this.sensibleRCC = this.sensible[6].rutinacorporal.cuidado;
            this.sensibleRCP = this.sensible[6].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoSensible = false;
            }, 1600);
            resolve();
          });
    });
  }
}
