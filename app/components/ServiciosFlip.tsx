"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; //Importamos el hook
import { servicios } from "@/app/data/servicio";

export default function ServiciosFlip() {
    const router = useRouter(); // Inicializamos el router

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                   <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                        Nuestros <span className="text-[#0173BC]">Servicios</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] mx-auto rounded-full" />
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                        Brindamos atención integral con tecnología de punta y un equipo humano de excelencia.
                    </p>
                </motion.div>

                {/* Grid de tarjetas cuadradas con efecto flip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 [perspective:1000px]"
                        >
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* CARA FRONTAL: imagen de fondo + título */}
                                <div
                                    className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-cover bg-center [backface-visibility:hidden] flex items-center justify-center p-4 text-center"
                                    style={{ backgroundImage: `url(${servicio.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <h3 className="relative z-10 text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                                        {servicio.title}
                                    </h3>
                                </div>

                                {/* CARA POSTERIOR: información adicional */}
                                <div className="absolute inset-0 rounded-2xl bg-[#10b5c5] p-6 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center gap-6 items-center text-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {servicio.title}
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {servicio.description}
                                        </p>
                                    </div>
                                    <button className="bg-white hover:bg-gray-100 text-[#0173BC] font-medium py-2 px-4 rounded-lg transition-colors w-fit">
                                        Conoce más
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón "Ver todos los servicios" con redirección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/servicios')} //  Redirige a /servicios
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10">Ver todos los servicios</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}