import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';
import * as M from '../../assets/js/materialize.min.js';

@Injectable({
  providedIn: 'root'
})
export class AntipigmentoService {
  cargadoAntipigmento = true;
  antipigmento: LineasInfo[] = [];
  antipigmentoRFL = [];
  antipigmentoRFC = [];
  antipigmentoRFP = [];
  antipigmentoRCL = [];
  antipigmentoRCC = [];
  antipigmentoRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarAntipigmanto();
  }

  private cargarAntipigmanto() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.antipigmento = resp;
            this.antipigmentoRFL = this.antipigmento[3].rutinafacial.limpieza;
            this.antipigmentoRFC = this.antipigmento[3].rutinafacial.cuidado;
            this.antipigmentoRFP = this.antipigmento[3].rutinafacial.proteccion;
            this.antipigmentoRCL = this.antipigmento[3].rutinacorporal.limpieza;
            this.antipigmentoRCC = this.antipigmento[3].rutinacorporal.cuidado;
            this.antipigmentoRCP = this.antipigmento[3].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoAntipigmento = false;
            }, 1600);
            resolve();
          });
    });
  }
}

