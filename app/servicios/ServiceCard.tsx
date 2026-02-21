import { Servicio } from "./types";

export default function ServiceCard({ servicio }: { servicio: Servicio }) {
  return (
    <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_50px_rgba(1,115,188,0.15)] transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full overflow-hidden">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full transition-all duration-500 group-hover:bg-[#0173BC]/10 group-hover:scale-[3] opacity-50" />

      {/* Contenedor del Icono */}
      <div className="relative z-10 w-24 h-24 mb-8">
        <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
        <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-blue-50 flex items-center justify-center 
                        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        group-hover:bg-[#0173BC] group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-200">
          <span className="text-4xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-md">
            {servicio.icono}
          </span>
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-[#0173BC] transition-colors tracking-tight">
          {servicio.titulo}
        </h3>
        <div className="h-1 w-8 bg-blue-200 mx-auto rounded-full mb-6 group-hover:w-16 group-hover:bg-[#0173BC] transition-all duration-500" />
      </div>
      
      <p className="relative z-10 text-gray-500 leading-relaxed text-sm flex-grow px-2 group-hover:text-gray-600 transition-colors">
        {servicio.descripcion}
      </p>
    </div>
  );
}