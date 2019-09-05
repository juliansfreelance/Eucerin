import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInfo } from '../pages/interfaces/productoInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  cargadoProducto = true;
  producto: ProductoInfo[] = [];
  constructor( private http: HttpClient ) {}

  cargarProducto( id: string ) {
    this.http.get('assets/data/dataProductos.json')
        .subscribe( (resp: ProductoInfo[]) => {
          resp.forEach( ( prod ) => {
            if ( prod.codigo === id ) {
              this.producto = prod;
            }
          });
          console.log(this.producto);
          setTimeout(() => {
            this.cargadoProducto  = false;
          }, 1600);
      });
  }
}
