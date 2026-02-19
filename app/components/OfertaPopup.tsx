"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function OfertaPopup() {
    const [isOpen, setIsOpen] = useState(false);

    // Mostrar el popup después de 1 segundo (para que no sea instantáneo)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setIsOpen(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Fondo oscuro overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                        {/* Cuadro de oferta */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
                            className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 p-8 text-center"
                        >
                            {/* Botón de cerrar X */}
                            <button
                                onClick={closePopup}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                                aria-label="Cerrar"
                            >
                                <X size={24} />
                            </button>

                            {/* Contenido */}
                            <div className="mb-4">
                                <span className="text-sm uppercase tracking-wider text-gray-500">Oferta especial</span>
                            </div>
                            <div className="text-4xl md:text-5xl font-black leading-tight mb-2">
                                <span className="block">Aprovecha el</span>
                                <span className="block text-6xl md:text-7xl text-[#0173BC]">50%</span>
                                <span className="block text-3xl md:text-4xl text-[#10b5c5]">de dscto.</span>
                                <span className="block text-2xl mt-2 font-semibold text-gray-700">por 6 meses</span>
                            </div>

                            {/* Botón opcional de llamada a la acción */}
                            <button className="mt-6 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                                ¡Lo quiero!
                            </button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}