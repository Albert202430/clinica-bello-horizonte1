"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const destacados = [
    {
        id: 1,
        nombre: "Daniel Valera",
        especialidad: "Ginecología",
        imagen: "/images/medicoespecializado.png", // Usando las imágenes reales o placeholder
    },
    {
        id: 2,
        nombre: "Frank Calderón",
        especialidad: "Urología",
        imagen: "/images/medicoespecializado2.png",
    },
    {
        id: 3,
        nombre: "Mirtha Bayona",
        especialidad: "Dermatología",
        imagen: "/images/medicoespecializado3.png",
    },
    /*{
        id: 4,
        nombre: "Dr. Francisco Adolfo Carrera",
        especialidad: "Ginecología y Obstetricia",
        imagen: "/images/medicoespecializado.png",
    },
    {
        id: 5,
        nombre: "Dr. Carlos Enrique Zapata",
        especialidad: "Cirugía General",
        imagen: "/images/medicoespecializado2.png",
    },
    {
        id: 6,
        nombre: "Daniel Valera",
        especialidad: "Ginecología",
        imagen: "/imagendoctores2.png", // Usando las imágenes reales o placeholder
    },
    {
        id: 7,
        nombre: "Wilder Córdova",
        especialidad: "Ginecología",
        imagen: "/images/doctor17.jpeg",
    },
    {
        id: 8,
        nombre: "Ricardo Castro",
        especialidad: "Cirugía Toráxica y Cardiovascular",
        imagen: "/images/doctor18.jpeg",
    },
    {
        id: 9,
        nombre: "Dr. Francisco Adolfo Carrera",
        especialidad: "Ginecología y Obstetricia",
        imagen: "/images/medicoespecializado.png",
    },
    {
        id: 10,
        nombre: "Dr. Carlos Enrique Zapata",
        especialidad: "Cirugía General",
        imagen: "/images/medicoespecializado2.png",
    }
    */
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % destacados.length);
    }, []);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(nextSlide, 4000); // Carrusel cada 4 segundos
        return () => clearInterval(timer);
    }, [isHovered, nextSlide]);

    if (!isMounted) return null; // Prevenir hidratación mismatch

    // Calculamos qué doctores mostrar basándonos en el índice actual y cuántos se muestran
    const visibleDoctors = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleDoctors.push({
            item: destacados[(currentIndex + i) % destacados.length],
            displayIndex: (currentIndex + i) % destacados.length
        });
    }

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Fondo decorativo opcional de antes */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#10b5c5] rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0173BC] rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#10b5c5] font-semibold tracking-wider uppercase mb-2 block">
                        Nuestro Equipo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                        Equipo Médico <span className="text-[#0173BC]">Especializado</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] mx-auto rounded-full" />
                </motion.div>

                {/* Grid del carrusel */}
                <div
                    className="overflow-hidden p-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative items-start`}>
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleDoctors.map((doc, idx) => (
                                <motion.div
                                    // La key debe ser única por item activo en pantalla para forzar render animado
                                    key={`${doc.item.id}-${doc.displayIndex}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50, position: "absolute" }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="flex flex-col gap-4 group cursor-pointer"
                                    // Ajuste de responsive grid classes manual para las posiciones
                                    style={{
                                        gridColumn: 'span 1',
                                        gridRow: 1,
                                        width: '100%',
                                    }}
                                >
                                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                                        <img
                                            src={doc.item.imagen}
                                            alt={doc.item.nombre}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-col px-1 text-center lg:text-left">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                                            {doc.item.nombre}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base mt-2">
                                            {doc.item.especialidad}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Botón Ver todos los médicos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/medicos">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <span className="relative z-10">Ver todos los médicos</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}