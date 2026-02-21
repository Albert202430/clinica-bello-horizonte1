"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import SpecialtyCard from "./SpecialtyCard";
import { servicios, especialidades } from "./data"; 
import { TabOption } from "./types";

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState<TabOption>('servicios');

  return (
    <section className="relative bg-white pb-24">
      
      {/* ENCABEZADO PREMIUM */}
      <div className="relative w-full h-[350px] md:h-[450px] bg-[#0173BC] overflow-hidden flex flex-col justify-center items-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0186db] via-[#0173BC] to-[#015a93]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#4DB8E2] rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-900 rounded-full blur-[120px] opacity-40"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-block mb-4">
            <span className="text-white uppercase font-bold tracking-[0.4em] text-[10px] md:text-xs bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
              Excelencia Especializada
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Catálogo <span className="text-[#4DB8E2]">Médico</span>
          </h1>
          
          {/* SISTEMA DE PESTAÑAS (TABS) MODERNOS */}
          <div className="flex bg-blue-900/40 p-1 rounded-2xl backdrop-blur-md border border-white/10 w-fit mx-auto mt-4">
            <button 
              onClick={() => setActiveTab('servicios')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'servicios' ? 'bg-white text-[#0173BC] shadow-lg' : 'text-white hover:bg-white/10'}`}
            >
              Servicios
            </button>
            <button 
              onClick={() => setActiveTab('especialidades')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'especialidades' ? 'bg-white text-[#0173BC] shadow-lg' : 'text-white hover:bg-white/10'}`}
            >
              Especialidades
            </button>
          </div>
        </div>
      </div>

      {/* ONDA DIVISORA */}
      <div className="relative w-full leading-[0] -mt-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[70px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-20 min-h-[600px]"> 
        
        {activeTab === 'servicios' ? (
          /* GRID DE SERVICIOS */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {servicios.map((servicio, index) => (
              <ServiceCard key={servicio.id} servicio={servicio} />
            ))}
          </div>
        ) : (
          /* GRID DE ESPECIALIDADES (DISEÑO DIFERENTE) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {especialidades.map((esp) => (
              <SpecialtyCard key={esp.id} especialidad={esp} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}