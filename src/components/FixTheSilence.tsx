'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Zap, TrendingUp, Brain, IndianRupee, Fingerprint, Lock, ArrowRight, Check } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const fixes = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "IMMEDIATE CONFIDENCE SHIFT",
        points: [
            "Walk out knowing EXACTLY what to say in tomorrow's meeting",
            'No more "I wish I had said that" regret',
            "Your first impact line ready to use within 24 hours"
        ],
        color: "from-yellow-400 to-orange-500",
        iconBg: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "CAREER ACCELERATION",
        points: [
            "Visibility = Promotions. You'll finally be on leadership's radar.",
            'Stop being "technically good" and become "leadership material"',
            "Your next appraisal conversation will feel completely different"
        ],
        color: "from-blue-400 to-cyan-500",
        iconBg: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "MENTAL FREEDOM",
        points: [
            "No more 4-hour anxiety cycles before meetings",
            "Sleep better knowing you have a system, not just hope",
            'End the "Main kaam toh karta hoon, par bolta nahi" guilt forever'
        ],
        color: "from-purple-400 to-pink-500",
        iconBg: "bg-purple-100 text-purple-600"
    },
    {
        icon: <IndianRupee className="w-6 h-6" />,
        title: "FINANCIAL IMPACT",
        points: [
            "Communication confidence = ₹6-8 LPA salary jump potential",
            "One promotion changes your family's lifestyle",
            "Stop watching peers with weaker work earn more"
        ],
        color: "from-green-400 to-emerald-500",
        iconBg: "bg-green-100 text-green-600"
    },
    {
        icon: <Fingerprint className="w-6 h-6" />,
        title: "IDENTITY TRANSFORMATION",
        points: [
            'From "the quiet one" to "the one with good insights"',
            "From Tier 2 background shame to authentic confidence",
            "Your Marathi/Hindi medium roots become your strength story, not your secret"
        ],
        color: "from-red-400 to-rose-500",
        iconBg: "bg-red-100 text-red-600"
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "PERMANENT SKILLSET",
        points: [
            "Scripts you'll use for YEARS in every meeting, presentation, negotiation",
            "Not temporary motivation - lasting communication framework",
            "Tools that compound: confidence today = more opportunities tomorrow"
        ],
        color: "from-indigo-400 to-violet-500",
        iconBg: "bg-indigo-100 text-indigo-600"
    }
];

interface FixItem {
    icon: React.ReactNode;
    title: string;
    points: string[];
    color: string;
    iconBg: string;
}

const FixCard = ({ item, index }: { item: FixItem, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className="group relative h-full bg-white border border-[#2D1B36]/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#7D4A94]/30 transition-all duration-300"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(125, 74, 148, 0.05),
              transparent 80%
            )
          `,
                }}
            />
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${item.iconBg} shadow-sm`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2D1B36] tracking-wide uppercase">{item.title}</h3>
                </div>
                <ul className="space-y-4">
                    {item.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                            <Check className="w-5 h-5 text-[#7D4A94]/40 group-hover:text-[#7D4A94] shrink-0 mt-0.5 transition-colors" />
                            <span className="text-gray-600 font-medium leading-relaxed text-sm md:text-base group-hover:text-[#2D1B36] transition-colors">
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default function FixTheSilence() {
    return (
        <section className="relative py-12 bg-[#FFFCF8] text-[#2D1B36] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-0" />
            <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#2D1B36 1px, transparent 1px), linear-gradient(90deg, #2D1B36 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D1B36]"
                    >
                        Your Silence Is Costing You <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#FACC15] font-black">
                            ₹6-8 LPA
                        </span>
                    </motion.h2>

                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-[#7D4A94]/10 blur-xl opacity-40 rounded-full" />
                        <p className="relative z-10 text-lg md:text-xl text-[#2D1B36] font-medium border border-[#7D4A94]/20 bg-white px-8 py-3 rounded-full shadow-sm">
                            Here&apos;s What This 60-Minute Session Fixes
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {fixes.map((item, index) => (
                        <FixCard key={index} item={item} index={index} />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center">


                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <CtaPaymentModal
                            trigger={
                                <button className="relative group">
                                    <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-12 py-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <span className="relative flex items-center gap-2">
                                            I&apos;M READY TO OWN MY VOICE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </button>
                            }
                        />
                        <p className="mt-8 text-xs text-red-500 font-bold uppercase tracking-widest border border-red-500/20 bg-red-50 px-4 py-1.5 rounded-full">
                            Limited Seats
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}