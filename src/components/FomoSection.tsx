'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, RefreshCcw } from 'lucide-react';

const painPoints = [
    "Sitting silently in meetings while others grab credit",
    'Watching batchmates become managers while you stay "senior executive"',
    "Feeling invisible despite excellent work",
    'Losing confidence daily: "Maybe I\'m just not leadership material"',
    "Stuck at same salary - promotions need visibility, not just delivery"
];

const PainPointCard = ({ text, index }: { text: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="group relative pl-8 py-6 border-l-2 border-gray-200 hover:border-[#7D4A94] transition-colors duration-500"
        >
            <div className="absolute left-[-11px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FAFAFA] border border-gray-300 rounded-full flex items-center justify-center group-hover:border-[#7D4A94] transition-colors z-10 shadow-sm">
                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[#7D4A94] transition-colors" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-xl" />
            <p className="relative z-10 text-lg md:text-xl text-gray-500 group-hover:text-[#2D1B36] transition-colors font-light leading-relaxed">
                {text}
            </p>
        </motion.div>
    );
};

export default function FomoCinematicLight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative py-12 bg-[#FAFAFA] text-[#2D1B36] overflow-hidden selection:bg-[#D4AF37] selection:text-white"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-multiply pointer-events-none" />
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-30 transition duration-300"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                rgba(212, 175, 55, 0.1),
                transparent 80%
              )
            `,
                    }}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.05]">
                    <RefreshCcw className="w-[800px] h-[800px] text-[#2D1B36] animate-[spin_60s_linear_infinite_reverse]" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-5/12 text-center lg:text-right">
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-[#2D1B36]">
                            What Happens If You <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7D4A94] to-[#D4AF37]">
                                Don&apos;t Fix This?
                            </span>
                        </h2>

                        <div className="relative inline-block mt-4 p-6 border border-gray-200 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                            <p className="text-gray-500 font-serif text-xl mb-2">6 months from now,</p>
                            <p className="text-3xl font-bold text-[#2D1B36]">
                                you&apos;ll <span className="bg-[#2D1B36] text-white px-3 py-1 inline-block transform -skew-x-12 shadow-lg">STILL</span> be
                            </p>
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#D4AF37]" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#D4AF37]" />
                        </div>
                    </div>

                    <div className="lg:w-7/12 relative perspective-[1000px]">
                        <motion.div
                            initial={{ rotateY: 15, opacity: 0 }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(45,27,54,0.08)] relative"
                        >
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Repeating Cycle</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {painPoints.map((text, i) => (
                                    <PainPointCard key={i} text={text} index={i} />
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-3xl" />
                        </motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7D4A94]/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>

            <style jsx global>{`
              .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
}