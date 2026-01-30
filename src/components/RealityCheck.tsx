'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } // easeOut
    }
};

const warningPulse: Variants = {
    animate: {
        scale: [1, 1.02, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] // easeInOut
        }
    }
};

function SpotlightCard({ text }: { text: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            variants={cardVars}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl border border-gray-100 bg-white p-8 overflow-hidden group hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] h-full"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] border border-gray-200 group-hover:border-[#D4AF37]/30 group-hover:bg-[#7D4A94]/5 transition-all">
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed group-hover:text-[#2D1B36] transition-colors">
                    {text}
                </p>
            </div>
        </motion.div>
    );
}

function MobileStackCard({ text, index }: { text: string, index: number }) {
    return (
        <div
            className="sticky top-4 mb-6 bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(45,27,54,0.05)]"
            style={{
                zIndex: index + 10
            }}
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] border border-gray-200">
                    <ChevronRight className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <p className="text-lg text-[#2D1B36] font-medium leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function RealityCheckSectionLight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const cards = [
        "Have great ideas but stay silent - watch others take credit",
        "Think in Hindi/Marathi, translate to English - lose flow completely",
        "Boss asks your opinion - heart races, mind blanks, you fumble",
        "See less qualified colleagues get promoted because they 'sound confident'",
        "End every day thinking: 'I should have spoken up'"
    ];

    return (
        <section ref={containerRef} className="relative py-12 bg-[#FAFAFA] text-[#2D1B36] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7D4A94]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#2D1B36]">
                        Does This Feel Like <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37]">Your Daily Reality?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {cards.map((text, i) => (
                        <div key={i} className={i === 3 ? "md:col-span-2 lg:col-span-2" : ""}>
                            <SpotlightCard text={text} />
                        </div>
                    ))}
                </motion.div>

                <div className="md:hidden relative">
                    {cards.map((text, i) => (
                        <MobileStackCard key={i} text={text} index={i} />
                    ))}
                </div>

                <div className="relative max-w-4xl mx-auto text-center mt-12">
                    <motion.div
                        variants={warningPulse}
                        animate="animate"
                        className="mb-10 inline-block"
                    >
                        <p className="text-xl md:text-2xl font-serif text-[#D4AF37] italic">
                            If this is you - even 60% - keep reading
                        </p>
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2 opacity-50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <CtaPaymentModal
                            trigger={
                                <button className="relative group">
                                    <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative bg-[#2D1B36] text-white font-bold text-lg px-12 py-5 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <span className="relative flex items-center gap-2">
                                            I WANT TO BE NOTICED <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </button>
                            }
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}