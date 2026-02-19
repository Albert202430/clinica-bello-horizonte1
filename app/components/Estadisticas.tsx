"use client";
import { stats } from "../data/stats";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const numericValue = parseInt(value, 10);

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Estadisticas() {
    return (
        <div className="w-full bg-white py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-default relative p-6 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex flex-row items-center justify-center gap-4">
                                <span className="text-5xl md:text-6xl font-bold text-[#10b5c5]">
                                    <Counter value={item.count} />
                                </span>
                                <div className="flex flex-col text-left">
                                    <span className="font-semibold text-[#0173BC] text-sm md:text-base leading-tight">
                                        {item.text}
                                    </span>
                                    <span className="font-semibold text-[#0173BC] text-sm md:text-base leading-tight">
                                        {item.subtext}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
