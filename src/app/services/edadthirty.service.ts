import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class EdadthirtyService {
  cargadoEdadthirty = true;
  edadthirty: LineasInfo[] = [];
  edadthirtyRFL = [];
  edadthirtyRFC = [];
  edadthirtyRFP = [];
  edadthirtyRCL = [];
  edadthirtyRCC = [];
  edadthirtyRCP = [];

  constructor( private http: HttpClient ) { 
    this.cargarEdadthirty();
  }

  private cargarEdadthirty() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.edadthirty = resp;
            this.edadthirtyRFL = this.edadthirty[1].rutinafacial.limpieza;
            this.edadthirtyRFC = this.edadthirty[1].rutinafacial.cuidado;
            this.edadthirtyRFP = this.edadthirty[1].rutinafacial.proteccion;
            this.edadthirtyRCL = this.edadthirty[1].rutinacorporal.limpieza;
            this.edadthirtyRCC = this.edadthirty[1].rutinacorporal.cuidado;
            this.edadthirtyRCP = this.edadthirty[1].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoEdadthirty = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
