import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class EdadfortyService {
  cargadoEdadforty = true;
  edadforty: LineasInfo[] = [];
  edadfortyRFL = [];
  edadfortyRFC = [];
  edadfortyRFP = [];
  edadfortyRCL = [];
  edadfortyRCC = [];
  edadfortyRCP = [];

  constructor( private http: HttpClient ) { 
    this.cargarEdadforty();
  }
  private cargarEdadforty() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.edadforty = resp;
            this.edadfortyRFL = this.edadforty[2].rutinafacial.limpieza;
            this.edadfortyRFC = this.edadforty[2].rutinafacial.cuidado;
            this.edadfortyRFP = this.edadforty[2].rutinafacial.proteccion;
            this.edadfortyRCL = this.edadforty[2].rutinacorporal.limpieza;
            this.edadfortyRCC = this.edadforty[2].rutinacorporal.cuidado;
            this.edadfortyRCP = this.edadforty[2].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoEdadforty = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
