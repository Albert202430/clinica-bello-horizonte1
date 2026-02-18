"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BannerDoctoresDestacados() {
    return (
        <section className="relative w-full bg-white">
            {/* Contenedor principal que ocupa todo el ancho y alto controlado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[500px] lg:min-h-[450px]">

                {/* Columna izquierda - Imagen (ocupa toda la altura) */}
                <div className="relative h-[300px] lg:h-auto overflow-hidden">
                    <Image
                        src="/images/equipo-medico.jpg" // ← REEMPLAZA CON TU IMAGEN
                        alt="Equipo médico de Clínica Bello Horizonte"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay sutil para dar profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>

                {/* Columna derecha - Contenido con gradiente */}
                <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#0173BC] to-[#10b5c5]">
                    {/* Fondo decorativo con círculos borrosos */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
                    </div>

                    {/* Contenido animado */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 text-white max-w-xl"
                    >
                        {/* Etiqueta superior */}
                        <span className="inline-block text-sm font-light tracking-[0.3em] uppercase mb-4 text-white/80 border-l-2 border-white/30 pl-4">
                            STAFF MÉDICO
                        </span>

                        {/* Nombres de los doctores con jerarquía */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
                            <span className="block">Ricardo Castro,</span>
                            <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-1">
                                Daniel Valera,
                            </span>
                            <span className="block text-2xl md:text-3xl lg:text-4xl font-light">
                                Wilder Córdoba
                            </span>
                        </h2>

                        {/* Línea decorativa */}
                        <div className="w-20 h-1 bg-white/50 rounded-full mb-5" />

                        {/* Descripción */}
                        <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-lg">
                            Reconocidos profesionales de la medicina encabezan el cuerpo médico de alto nivel de nuestra clínica
                        </p>

                        {/* Botón de llamado a la acción */}
                        <Link href="/cita">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-white text-[#0173BC] font-bold py-3 px-8 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">RESERVA TU CITA</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] opacity-0 group-hover:opacity-10 transition-opacity" />
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}