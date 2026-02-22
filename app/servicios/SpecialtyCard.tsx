import { Especialidad } from "./types";
import { Activity } from "lucide-react";


export default function SpecialtyCard({ especialidad }: { especialidad: Especialidad }) {
  return (
    <div className="group bg-slate-50 hover:bg-white p-5 rounded-[2rem] border border-transparent hover:border-blue-100 hover:shadow-lg transition-all duration-300 flex items-center gap-5">
      <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#0173BC] transition-all duration-300">
        <especialidad.icono 
          size={28} 
          className="text-[#0173BC] group-hover:text-white transition-colors duration-300" 
        />
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#0173BC] transition-colors leading-tight">
          {especialidad.nombre}
        </h4>
        <p className="text-xs text-gray-500 line-clamp-1">{especialidad.descripcionCorta}</p>
      </div>
      <div className="text-[#0173BC] opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
        <Activity size={16} />
      </div>
    </div>
  );
}