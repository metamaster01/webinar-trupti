'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BatteryWarning, TrendingDown, Banknote, ShieldAlert, UserX, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const costItems = [
    {
        id: 1,
        title: "4+ hours of mental energy",
        sub: "(preparing to speak but not speaking)",
        icon: <BatteryWarning className="w-6 h-6" />,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200"
    },
    {
        id: 2,
        title: "Lost promotions",
        sub: "(communication = 70% of selection criteria at mid-level)",
        icon: <TrendingDown className="w-6 h-6" />,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200"
    },
    {
        id: 3,
        title: "Salary stagnation",
        sub: "(₹12 LPA to ₹18 LPA jump needs speaking skills)",
        icon: <Banknote className="w-6 h-6" />,
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200"
    },
    {
        id: 4,
        title: "Confidence erosion",
        sub: "(self-doubt compounds with each silent meeting)",
        icon: <ShieldAlert className="w-6 h-6" />,
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200"
    },
    {
        id: 5,
        title: "Imposter syndrome deepens",
        sub: "(Tier 2 background becomes permanent shame)",
        icon: <UserX className="w-6 h-6" />,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200"
    }
];

interface CostItem {
    id: number;
    title: string;
    sub: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    border: string;
}

const CostCard = ({ item, index }: { item: CostItem, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02, translateX: 10, translateZ: 20 }}
            className={`relative group p-6 rounded-2xl border ${item.border} bg-white shadow-sm hover:shadow-xl transition-all duration-300`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FACC15]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-2xl" />

            <div className="flex items-start gap-5 relative z-10">
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} shadow-sm shrink-0`}>
                    {item.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#2D1B36] mb-1 group-hover:text-[#7D4A94] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                        {item.sub}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function CostOfSilence() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={containerRef} className="relative py-12 bg-[#FFFCF8] overflow-hidden wos-perspective-1000 text-[#2D1B36]">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none z-0 opacity-[0.05]">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h1 className="text-[20vw] font-black text-transparent stroke-[#2D1B36] stroke-2" style={{ WebkitTextStroke: "2px #2D1B36" }}>
                        COST OF SILENCE COST OF SILENCE
                    </h1>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-5/12">
                        <div className="sticky top-32">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-serif text-[#2D1B36] leading-tight mb-8"
                            >
                                Every Day of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#945CAD]">Silence</span>
                                <span className="block text-red-600 mt-2">Costs You</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 bg-white border border-[#7D4A94]/20 rounded-2xl shadow-lg"
                            >
                                <p className="text-gray-600 italic mb-4 font-medium">
                                    &quot;It&apos;s not just about feeling shy. It&apos;s about tangible, financial, and career loss happening every single day.&quot;
                                </p>
                                <div className="h-1 w-20 bg-red-500 rounded-full" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 flex flex-col gap-5">
                        {costItems.map((item, index) => (
                            <CostCard key={item.id} item={item} index={index} />
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex justify-center lg:justify-start"
                        >
                            <CtaPaymentModal
                                trigger={
                                    <button className="relative group">
                                        <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-10 py-5 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-xl">
                                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                            <span className="relative flex items-center gap-2">
                                                REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </button>
                                }
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}