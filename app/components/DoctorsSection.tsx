// components/DoctorsSection.tsx
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function DoctorsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Animación de entrada al hacer scroll (opcional)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-12 md:py-16 lg:py-20 opacity-0 transition-opacity duration-700"
            style={{ willChange: 'opacity, transform' }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-0">
                    {/* Columna izquierda: Texto y botón */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-8 lg:pr-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-300 hover:text-blue-600 hover:scale-105 origin-left">
                            Ricardo Castro y <br /> Daniel Valera
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-lg transition-all duration-300 hover:text-gray-900">
                            Reconocidos profesionales de la medicina encabezan el cuerpo médico de alto nivel de nuestra clínica.
                        </p>
                        <div className="mt-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                RESERVA TU CITA
                            </button>
                        </div>
                    </div>

                    {/* Columna derecha: Foto + Triángulo */}
                    <div className="w-full md:w-1/2 flex flex-row group">
                        {/* Contenedor de la imagen (70% del ancho) */}
                        <div className="w-2/3 relative overflow-hidden rounded-l-2xl transition-all duration-500 group-hover:rounded-l-3xl" style={{ minHeight: '400px' }}>
                            <Image
                                src="/imagendoctores2.png"
                                alt="Doctores Ricardo y Daniel Valera"
                                fill
                                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                unoptimized // solo si la imagen no está optimizada por Next.js
                            />
                            {/* Overlay sutil para mejorar contraste (opcional) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Triángulo azul a la derecha (30% del ancho) */}
                        <div
                            className="w-1/3 bg-blue-600 transition-all duration-500 ease-in-out group-hover:bg-blue-700 group-hover:rotate-3 group-hover:scale-105"
                            style={{
                                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                                minHeight: '400px',
                            }}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>

            {/* Estilos adicionales para la animación de entrada */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
}