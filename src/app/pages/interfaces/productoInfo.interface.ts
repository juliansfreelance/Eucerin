export interface ProductoInfo {
  codigo?: string;
  nombre?: string;
  subtitulo?: string;
  categoria?: string;
  tipo?: string;
  recomendaciones?: string;
  beneficios?: string;
  componentes?: Componente[];
  presentaciones?: string;
  uso?: string;
  color?: string;
}

interface Componente {
  titulo?: string;
  descripcion?: string;
}
