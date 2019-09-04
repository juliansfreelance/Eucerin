export interface Producto {
  codigo: string;
  nombre: string;
  subnombre: string;
  tipo: string;
  categorias: string[];
  recomendaciones: string;
  beneficios: string;
  componentes: Componentes;
  presentaciones: string;
  uso: string;
}

interface Componentes {
  titulo: string[];
  descripcion: string[];
}