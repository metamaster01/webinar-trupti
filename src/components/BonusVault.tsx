'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, Library, Activity, Mic, Map, Gift, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const bonuses = [
    {
        id: 1,
        title: 'BONUS #1: "10 IMPACT Lines Swipe File"',
        value: "₹5,000 value",
        desc: "10 copy-paste meeting lines customized for IT/Sales/Marketing - drop 1 per meeting starting tomorrow.",
        icon: <FileText className="w-6 h-6" />
    },
    {
        id: 2,
        title: 'BONUS #2: "Lifetime Script Library Access"',
        value: "₹7,000 value",
        desc: "200+ STAR pitches + IMPACT lines + client call scripts. Unlimited updates forever.",
        icon: <Library className="w-6 h-6" />
    },
    {
        id: 3,
        title: 'BONUS #3: "90-Day Daily Monitoring"',
        value: "₹8,000 value",
        desc: "WhatsApp check-ins + practice video feedback. 90% completion rate vs competitors' 30%.",
        icon: <Activity className="w-6 h-6" />
    },
    {
        id: 4,
        title: 'BONUS #4: "English Fluency Under Pressure Kit"',
        value: "₹3,000 value",
        desc: "Breathing hacks + accent-neutral scripts + 5-min daily drills for boss/client calls.",
        icon: <Mic className="w-6 h-6" />
    },
    {
        id: 5,
        title: 'BONUS #5: "Promotion Roadmap Template"',
        value: "₹2,000 value",
        desc: "Personalized 6-month plan: Meeting visibility → boss conversations → salary jump tracker.",
        icon: <Map className="w-6 h-6" />
    }
];

interface BonusItem {
    id: number;
    title: string;
    value: string;
    desc: string;
    icon: React.ReactNode;
}

const BonusCard = ({ item, index }: { item: BonusItem; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-300"
        >
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#FAFAFA] rounded-xl border border-gray-200 shadow-sm text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#7D4A94]/5">
                        {item.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#2D1B36] text-xs font-bold font-mono rounded uppercase tracking-wider">
                        {item.value}
                    </span>
                </div>
                <h3 className="text-xl font-serif text-[#2D1B36] font-bold mb-4 leading-tight group-hover:text-[#7D4A94] transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.desc}
                </p>
            </div>
        </motion.div>
    );
};

function MobileStackCard({ item, index }: { item: BonusItem, index: number }) {
    return (
        <div
            className="sticky mb-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_5px_20px_rgba(45,27,54,0.08)]"
            style={{
                top: `calc(6rem + ${index * 10}px)`,
                zIndex: index + 10
            }}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-[#FAFAFA] rounded-lg border border-gray-200 text-[#D4AF37]">
                    {item.icon}
                </div>
                <span className="text-[10px] font-bold bg-[#F3F4F6] px-2 py-1 rounded text-[#2D1B36]">
                    {item.value}
                </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#2D1B36] mb-2 leading-tight">
                {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
            </p>
        </div>
    );
}

export default function BonusVaultLight() {
    return (
        <section className="relative py-12 bg-[#FAFAFA] text-[#2D1B36] font-sans selection:bg-[#D4AF37] selection:text-white perspective-[2000px]">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FAFAFA] to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply" />
                <div className="absolute top-20 right-20 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#7D4A94]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#FFF] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
                    >
                        <Gift className="w-4 h-4" />
                        Limited Time Offer
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-serif text-[#2D1B36] mb-6"
                    >
                        WEBINAR BONUSES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37] font-black drop-shadow-sm">
                            (₹25,000 FREE VALUE)
                        </span>
                    </motion.h2>
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
                    {bonuses.map((item, index) => (
                        <div key={item.id} className="h-full perspective-[1000px]">
                            <BonusCard item={item} index={index} />
                        </div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative md:col-span-2 lg:col-span-1 bg-[#2D1B36] border border-[#D4AF37] rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />

                        <div className="relative z-10">
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">coaches charge </p>
                            <p className="text-4xl font-serif text-white line-through decoration-red-500 decoration-2 mb-2">₹50,000+</p>
                            <p className="text-[#D4AF37] font-black text-2xl uppercase mb-6 animate-pulse">
                                FREE TODAY
                            </p>
                            <div className="text-xs text-gray-400 border border-white/10 rounded px-3 py-1 inline-block">
                                with course enrollment
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="md:hidden relative pb-12">
                    {bonuses.map((item, index) => (
                        <MobileStackCard key={item.id} item={item} index={index} />
                    ))}

                    <div
                        className="sticky bg-[#2D1B36] border border-[#D4AF37] rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden mt-8"
                        style={{ top: `calc(6rem + ${bonuses.length * 10 + 20}px)`, zIndex: 100 }}
                    >
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total Value</p>
                        <p className="text-[#D4AF37] font-black text-3xl uppercase">FREE TODAY</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 max-w-4xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent blur-[2px]" />
                    <h3 className="text-2xl md:text-3xl font-serif text-[#2D1B36] mb-4">
                        Everything high-ticket coaches charge <span className="text-[#7D4A94]">₹50K+</span>
                    </h3>
                    <p className="text-gray-600 text-lg mb-10">
                        for yours <span className="text-[#2D1B36] font-bold underline decoration-[#D4AF37]">FREE</span> with course enrollment
                    </p>

                    <CtaPaymentModal
                        trigger={
                            <button className="relative group w-full md:w-auto">
                                <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative bg-[#2D1B36] text-white font-bold text-lg px-8 md:px-16 py-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative flex items-center justify-center gap-2 text-sm md:text-base">
                                        CLAIM ALL BONUSES - REGISTER NOW <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </button>
                        }
                    />

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Offer expires soon
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
              .perspective-1000 { perspective: 1000px; }
              .perspective-2000 { perspective: 2000px; }
            `}</style>
        </section>
    );
}