'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, TrendingUp, AlertTriangle, Play } from 'lucide-react';
// IMPORT THE POPUP YOU JUST CREATED
import OptinPopup from './OptinPopup';

const benefits = [
    { title: "Salary Jump", desc: "₹6-12 LPA average increase within 90 days of visibility shift" },
    { title: "Promotion Track", desc: "From 'good worker' to Senior Manager/Team Lead consideration" },
    { title: "Meeting Confidence", desc: "Speak first, get credit, own the room—no more freeze" },
    { title: "Premium Offers", desc: "Recruiters notice. Interview with authority. Command higher packages" },
    { title: "Career Control", desc: "Stop waiting for 'your turn.' Demand what you deserve" }
];

const costs = [
    { title: "Salary Stagnation", desc: "Peers jump ₹6-12L while you get 8% annual 'increments'" },
    { title: "Promotion Bypass", desc: "&apos;Communication skills&apos; = 70% of mid-level selection criteria" },
    { title: "Stolen Credit", desc: "Your ideas. Their mouth. Their recognition. Your regret." },
    { title: "Identity Erosion", desc: "You start believing &apos;Maybe I&apos;m just not leadership material&apos;" },
    { title: "Lifetime Loss", desc: "3 years of silence = ₹20-30 lakhs in lost earnings" }
];

export default function OutcomeComparisonSection() {
    // Simple State to control the popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA] text-[#2D1B36] font-sans relative overflow-hidden selection:bg-[#D4AF37] selection:text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#2D1B36] mb-4">
                        The Two Paths: <span className="italic text-[#7D4A94]">Which One Are You On?</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
                </div>

                {/* --- COMPARISON GRID --- */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">

                    {/* LEFT: THE GAINS */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-[#00B67A]/20 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,182,122,0.05)] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B67A] to-[#D4AF37]" />
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-[#00B67A]/10 rounded-lg text-[#00B67A]">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold">What Changes When You Speak Up</h3>
                        </div>

                        <ul className="space-y-6">
                            {benefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#00B67A] flex items-center justify-center text-white shadow-sm">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2D1B36] text-sm md:text-base">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* RIGHT: THE COST */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#FFF5F5] border border-red-100 rounded-3xl p-8 relative overflow-hidden opacity-95 group hover:opacity-100 transition-opacity"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600" />
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-red-100 rounded-lg text-red-600">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-red-900">What Silence Is Costing You</h3>
                        </div>

                        <ul className="space-y-6">
                            {costs.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 border border-red-200">
                                        <X className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-900 text-sm md:text-base">{item.title}</h4>
                                        <p className="text-sm text-red-800/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* --- BRUTAL TRUTH CARD --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-[#2D1B36] text-white rounded-2xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl mb-12"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7D4A94]/20 to-transparent pointer-events-none" />

                    <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 relative z-10">The Brutal Truth</h4>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10 text-lg md:text-2xl font-serif leading-relaxed">
                        <span className="opacity-80">
                            Your <span className="text-white font-bold border-b border-gray-500">technical skills</span> got you to <br className="md:hidden" /> ₹10-12L
                        </span>
                        <ArrowRight className="hidden md:block text-[#D4AF37] w-8 h-8" />
                        <ArrowRight className="md:hidden text-[#D4AF37] w-6 h-6 rotate-90 my-2" />
                        <span>
                            <span className="text-[#D4AF37] font-bold border-b border-[#D4AF37]">Communication skills</span> get you to <br className="md:hidden" /> ₹20-25L
                        </span>
                    </div>
                </motion.div>

                {/* --- CTA SECTION --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-xl font-serif text-[#2D1B36] mb-6 italic">
                        &quot;6 Minutes Could Change Your Next 6 Months&quot;
                    </p>

                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="relative group inline-block"
                    >
                        <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative bg-[#2D1B36] text-white font-bold text-lg md:text-xl py-5 px-10 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <Play className="w-5 h-5 fill-white text-white" />
                            <span className="relative tracking-wide">
                                WATCH THE FREE TRAINING NOW
                            </span>
                        </div>
                    </button>

                    <p className="mt-4 text-xs text-gray-500">
                        Limited Access • No Credit Card Required
                    </p>
                </motion.div>
            </div>

            {/* --- REUSABLE POPUP COMPONENT --- */}
            <OptinPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

        </section>
    );
}