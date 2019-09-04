export interface LineasInfo {
  linea?: string;
  nombre?: string;
  rutinafacial?: Rutinafacial;
  rutinacorporal?: Rutinacorporal;
}
interface Rutinafacial {
  limpieza?: ProductoLinea[];
  cuidado?: ProductoLinea[];
  proteccion?: ProductoLinea[];
}
interface Rutinacorporal {
  limpieza?: ProductoLinea[];
  cuidado?: ProductoLinea[];
  proteccion?: ProductoLinea[];
}
interface ProductoLinea {
  codigo?: string;
  nombre?: string;
}