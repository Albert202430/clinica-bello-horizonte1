// servicios/types.ts

import { LucideIcon } from "lucide-react";
export type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: LucideIcon;  
  color?: string; 
};


export type Especialidad = {
  id: number;
  nombre: string;
  descripcionCorta: string;
  icono: LucideIcon;  
  imagenFondo?: string; 
  disponible: boolean;
  slug: string; 
};

export type TabOption = 'servicios' | 'especialidades';