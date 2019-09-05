export interface ProductoInfo {
  codigo: string;
  nombre: string;
  tipo: string;
  recomendaciones: string;
  beneficios: string;
  componentes: Componente[];
  presentaciones: string;
  uso: string;
}

interface Componente {
  titulo: string;
  descripcion: string;
}
