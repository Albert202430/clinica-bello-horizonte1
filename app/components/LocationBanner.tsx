import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Navigation, ChevronRight, Building2, Clock, Star } from 'lucide-react';

const LocationBanner = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = e.currentTarget?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: (e.clientX - rect.left - rect.width / 2) / 25,
                    y: (e.clientY - rect.top - rect.height / 2) / 25
                });
            }
        };

        const element = document.getElementById('banner-container');
        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
            return () => element.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const openGoogleMaps = () => {
        const address = "Clinica Bello Horizonte Piura";
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    return (
        <div id="banner-container" className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-[#0173BC] via-[#0a8fc4] to-[#10b5c5]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10b5c5]/30 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0173BC]/20 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 text-white space-y-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                        <span className="text-sm font-medium">Clínica BelloHorizonte</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Visítanos en
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#10b5c5]">
                            nuestra sede
                        </span>
                    </h1>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Estamos ubicados en una zona de fácil acceso para brindarte la mejor atención médica con instalaciones modernas y cómodas.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="p-3 bg-[#10b5c5] rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#10b5c5]/30">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                                <p className="text-white/70">Av. Los Diamantes Cruce con Av. Ramòn Romero a Espaldas del Terminal Terreste Gechiza,
                                    Piura - Perù</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="p-3 bg-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Phone className="w-6 h-6 text-[#0173BC]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                                <p className="text-white/70">947052846</p>
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={openGoogleMaps}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group relative inline-flex items-center gap-3 bg-white text-[#0173BC] px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-black/20 hover:shadow-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Navigation className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`} />
                            Ver en Google Maps
                            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#10b5c5] to-[#0173BC] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </button>
                </div>

                {/* Right Content - 3D Phone Mockup */}
                <div className="flex-1 relative flex justify-center items-center perspective-1000">
                    <div
                        className="relative transform-gpu transition-transform duration-200 ease-out"
                        style={{
                            transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
                        }}
                    >
                        {/* Phone Frame */}
                        <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-gradient-to-b from-[#0173BC] to-[#10b5c5] overflow-hidden">
                                {/* Map Background */}
                                <div className="absolute inset-0 opacity-30">
                                    <svg className="w-full h-full" viewBox="0 0 400 800">
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                        {/* Streets */}
                                        <path d="M0 200 Q200 180 400 220" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                                        <path d="M100 0 Q120 400 80 800" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                                        <path d="M300 0 Q280 300 320 800" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
                                    </svg>
                                </div>

                                {/* Location Pin Animation */}
                                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        {/* Pulse Rings */}
                                        <div className="absolute inset-0 w-24 h-24 -m-8 bg-white/20 rounded-full animate-ping" />
                                        <div className="absolute inset-0 w-24 h-24 -m-8 bg-white/10 rounded-full animate-pulse" />

                                        {/* Pin */}
                                        <div className="relative animate-bounce">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                                <Building2 className="w-8 h-8 text-[#0173BC]" />
                                            </div>
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Card */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 shadow-2xl transform translate-y-0">
                                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-[#0173BC] rounded-xl flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Clínica BelloHorizonte</h4>
                                            <p className="text-sm text-gray-500">Centro Médico</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-[#0173BC] text-white py-3 rounded-xl text-center text-sm font-semibold">
                                            Cómo llegar
                                        </div>
                                        <div className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl text-center text-sm font-semibold">
                                            Guardar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-[#10b5c5] rounded-full blur-2xl opacity-60" />
                        <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-white rounded-full blur-3xl opacity-20" />

                        {/* Floating Cards */}
                        <div className="absolute -right-16 top-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl animate-pulse">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <Navigation className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-bold text-gray-800">15 min</span>
                            </div>
                        </div>

                        <div className="absolute -left-12 bottom-32 bg-white/90 backdrop-blur p-3 rounded-xl shadow-xl">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-bold text-gray-800">4.9</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default LocationBanner;