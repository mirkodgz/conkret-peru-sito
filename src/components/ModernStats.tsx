
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

const stats = [
    {
        value: 10,
        label: "AÑOS DE EXPERIENCIA",
        suffix: "+",
    },
    {
        value: 1200,
        label: "PROYECTOS EJECUTADOS",
        suffix: "+",
    },
    {
        value: 1000000,
        label: "M³ DE CONCRETO",
        suffix: "+",
        isMillion: true,
    },
];

const Counter = ({ value, suffix, isMillion }: { value: number; suffix: string; isMillion?: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        duration: 2.5,
    });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (isMillion) {
                if (latest >= 1000000) {
                    setDisplayValue((latest / 1000000).toFixed(0) + "M");
                } else {
                    setDisplayValue(Math.floor(latest).toLocaleString());
                }
            } else {
                setDisplayValue(Math.floor(latest).toLocaleString());
            }
        });
    }, [springValue, isMillion]);

    return (
        <span ref={ref} className="tabular-nums tracking-tighter">
            {displayValue === "1M" && isMillion ? "1M" : displayValue}
            {suffix}
        </span>
    );
};

export default function ModernStats() {
    return (
        <section className="relative py-20 bg-[#0f172a] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] rounded-full bg-red-600/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <h2 className="sr-only">Estadísticas de Conkret</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-6"
                        >
                            <div className="flex flex-col items-center justify-center">
                                {/* Large Counter Number */}
                                <h3 className="text-7xl md:text-8xl font-black mb-2 bg-clip-text text-transparent bg-linear-to-b from-white via-white to-slate-500 drop-shadow-2xl">
                                    <Counter value={stat.value} suffix={stat.suffix} isMillion={stat.isMillion} />
                                </h3>

                                {/* Visual Separator */}
                                <div className="w-16 h-1.5 bg-red-600 rounded-full mb-4 opacity-80" />

                                {/* Label */}
                                <p className="text-slate-300 font-bold tracking-[0.2em] text-sm md:text-base uppercase shadow-black drop-shadow-sm">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
