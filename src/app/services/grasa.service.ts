import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineasInfo } from '../pages/interfaces/lineasInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class GrasaService {
  cargadoGrasa = true;
  grasa: LineasInfo[] = [];
  grasaRFL = [];
  grasaRFC = [];
  grasaRFP = [];
  grasaRCL = [];
  grasaRCC = [];
  grasaRCP = [];

  constructor( private http: HttpClient ) {
    this.cargarGrasa();
  }
  private cargarGrasa() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('assets/data/dataLineas.json')
          .subscribe( (resp: LineasInfo[]) => {
            this.grasa = resp;
            this.grasaRFL = this.grasa[4].rutinafacial.limpieza;
            this.grasaRFC = this.grasa[4].rutinafacial.cuidado;
            this.grasaRFP = this.grasa[4].rutinafacial.proteccion;
            this.grasaRCL = this.grasa[4].rutinacorporal.limpieza;
            this.grasaRCC = this.grasa[4].rutinacorporal.cuidado;
            this.grasaRCP = this.grasa[4].rutinacorporal.proteccion;
            setTimeout(() => {
              this.cargadoGrasa = false;
            }, Math.floor(Math.random() * (1600 - 600)) + 600);
            resolve();
          });
    });
  }
}
