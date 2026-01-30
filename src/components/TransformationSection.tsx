'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Globe, Mic2, TrendingUp, Coffee, Moon, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const timelineEvents = [
    {
        icon: <Users className="w-5 h-5" />,
        time: "Monday meeting",
        text: 'You speak up FIRST with your idea. Boss nods. "Good point."'
    },
    {
        icon: <Globe className="w-5 h-5" />,
        time: "Client call",
        text: "English flows naturally. No translation delay. No accent shame."
    },
    {
        icon: <Mic2 className="w-5 h-5" />,
        time: "Presentation",
        text: "You own the room. Crisp, clear, confident."
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        time: "Appraisal",
        text: 'Boss says: "I\'ve noticed you\'ve really stepped up in visibility."'
    },
    {
        icon: <Coffee className="w-5 h-5" />,
        time: "Team lunch",
        text: "Small talk feels easy. You're not the silent one anymore."
    },
    {
        icon: <Moon className="w-5 h-5" />,
        time: "Evening",
        text: 'Drive home thinking "I DID speak up today" instead of "I should have."'
    },
    {
        icon: <Award className="w-5 h-5" />,
        time: "6 months",
        text: "Promotion conversation starts. They see you as leadership material now.",
        highlight: true
    }
];

export default function TransformationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative py-24 bg-[#FFFCF8] overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FACC15]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D1B36] leading-tight"
                    >
                        What If You Could Walk Into <br />
                        Any Meeting and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#B76CD6] italic">Just... Speak?</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="w-full lg:w-7/12 relative">
                        <div className="absolute left-8 top-4 bottom-12 w-[2px] bg-gray-200">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-[#FACC15] origin-top shadow-[0_0_10px_#FACC15]"
                            />
                        </div>

                        <div className="flex flex-col gap-12">
                            {timelineEvents.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative pl-24 group"
                                >
                                    <div className="absolute left-[23px] top-1 w-[22px] h-[22px] bg-white border-4 border-gray-200 rounded-full z-10 group-hover:border-[#FACC15] group-hover:scale-125 transition-all duration-300 shadow-sm flex items-center justify-center">
                                        <div className="w-2 h-2 bg-[#7D4A94] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.highlight ? 'bg-[#2D1B36] border-[#FACC15] text-white shadow-2xl' : 'bg-white border-gray-100 hover:border-[#7D4A94]/30'}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${item.highlight ? 'bg-[#FACC15] text-[#2D1B36]' : 'bg-[#7D4A94]/10 text-[#7D4A94]'}`}>
                                                {item.icon}
                                            </div>
                                            <h3 className={`font-bold text-sm uppercase tracking-wider ${item.highlight ? 'text-[#FACC15]' : 'text-[#7D4A94]'}`}>
                                                {item.time}
                                            </h3>
                                        </div>

                                        <p className={`text-lg md:text-xl font-serif leading-relaxed ${item.highlight ? 'text-white' : 'text-[#2D1B36]'}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block w-5/12 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative wos-perspective-1000"
                        >
                            {/* Background Image */}
                            <motion.div
                                initial={{ x: 20, y: 20, rotate: -5 }}
                                whileInView={{ x: 0, y: 0, rotate: -2 }}
                                className="absolute inset-0 rounded-[40px] overflow-hidden border-[4px] border-white shadow-xl z-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                            >
                                <img
                                    src="https://gold-gull-715938.hostingersite.com/wp-content/uploads/2026/01/photo-no-2.JPG-scaled.webp"
                                    alt="Background"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#2D1B36]/10" />
                            </motion.div>

                            {/* Main Foreground Image */}
                            <div className="relative z-10 rounded-[40px] overflow-hidden border-[8px] border-white shadow-2xl bg-white transform rotate-3 hover:rotate-0 transition-transform duration-700 translate-x-4 -translate-y-4">
                                <img
                                    src="https://gold-gull-715938.hostingersite.com/wp-content/uploads/2026/01/photo-no-2.JPG-scaled.webp"
                                    alt="Confident Speaking"
                                    className="w-full h-auto object-cover"
                                />

                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg z-20 border-l-4 border-[#FACC15]">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-8 h-8 text-[#7D4A94]" />
                                        <div>
                                            <p className="font-bold text-[#2D1B36] text-lg">Leadership Ready</p>
                                            <p className="text-sm text-gray-600">This could be your story in 6 months.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-12 -right-12 w-full h-full border-2 border-[#FACC15] rounded-[40px] -z-10 opacity-30" />
                        </motion.div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <CtaPaymentModal
                        trigger={
                            <button className="relative group">
                                <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-12 py-5 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative flex items-center gap-2">
                                        REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </button>
                        }
                    />
                </div>
            </div>
        </section>
    );
}