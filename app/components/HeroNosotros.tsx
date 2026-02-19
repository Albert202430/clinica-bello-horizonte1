"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroNosotros() {
  return (
    <>
      {/* Hero con imagen de fondo y overlay azul sólido */}
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Imagen de fondo optimizada */}
        <Image
          src="/Hero-Nosotros.png"
          alt="Instalaciones de Clínica Bello Horizonte"
          fill
          className="object-cover object-bottom"
          priority
          quality={90}
        />
        
        {/* Overlay azul sólido con opacidad (la imagen se ve detrás) */}
        <div className="absolute inset-0 bg-[#0173BC]/80"></div>
        
        {/* Contenido centrado */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-white/80 text-sm md:text-base font-light tracking-[0.4em] uppercase mb-4 border-l-2 border-white/30 pl-4"
          >
            NOSOTROS
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Clínica Bello Horizonte
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-[#10b5c5] rounded-full mx-auto mt-6 shadow-lg"
          />
        </div>
      </div>

      {/* Onda inferior - igual que antes */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] fill-[#0173BC]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </>
  );
}