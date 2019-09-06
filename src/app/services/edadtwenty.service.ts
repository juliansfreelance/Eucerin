import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class EdadtwentyService {
  cargadoEdadtwenty = true;
  edadtwenty: LineasInfo[] = [];
  edadtwentyRFL = [];
  edadtwentyRFC = [];
  edadtwentyRFP = [];
  edadtwentyRCL = [];
  edadtwentyRCC = [];
  edadtwentyRCP = [];

  constructor( private http: HttpClient ) { 
    this.cargarEdadtwenty();
  }

  private cargarEdadtwenty() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.edadtwenty = resp;
            this.edadtwentyRFL = this.edadtwenty[0].rutinafacial.limpieza;
            this.edadtwentyRFC = this.edadtwenty[0].rutinafacial.cuidado;
            this.edadtwentyRFP = this.edadtwenty[0].rutinafacial.proteccion;
            this.edadtwentyRCL = this.edadtwenty[0].rutinacorporal.limpieza;
            this.edadtwentyRCC = this.edadtwenty[0].rutinacorporal.cuidado;
            this.edadtwentyRCP = this.edadtwenty[0].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoEdadtwenty = false;
            }, 1600);
            resolve();
          });
    });
  }
}
