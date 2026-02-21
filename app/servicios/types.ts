// servicios/types.ts

// Tipo base para Servicios (como Laboratorio, Rayos X)
export type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string; 
  color?: string; 
};


export type Especialidad = {
  id: number;
  nombre: string;
  descripcionCorta: string;
  icono: string;
  imagenFondo?: string; 
  disponible: boolean;
  slug: string; 
};

export type TabOption = 'servicios' | 'especialidades';