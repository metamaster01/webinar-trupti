'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, UserCheck, ShieldAlert } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const forYouItems = [
    "You're a working professional or mid-level manager (₹8-25 LPA)",
    "You're in IT, Sales, Marketing, or corporate roles in Tier 1/2 cities",
    "You deliver great work but feel invisible in meetings",
    "Your ideas get stolen because you stay silent or explain poorly"
];

const notForYouItems = [
    "Students or job seekers (this is for working professionals only)",
    "Anyone wanting free motivation or quick hacks",
    "People not willing to practice 5 minutes daily",
    "Those looking for magic pills without effort"
];

export default function AudienceFilterClean() {
    return (
        <section className="relative py-12 bg-[#FAFAFA] text-[#2D1B36] font-sans overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-serif text-[#2D1B36] mb-4"
                    >
                        Is This Masterclass <span className="italic text-[#7D4A94]">Right For You?</span>
                    </motion.h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto" />
                </div>

                <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-10 lg:p-12 rounded-t-3xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-4 border-[#D4AF37] relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                                <UserCheck className="w-5 h-5 text-[#D4AF37]" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#2D1B36]">
                                Perfect Match If...
                            </h3>
                        </div>

                        <ul className="space-y-6">
                            {forYouItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <p className="text-gray-700 font-medium leading-relaxed group-hover:text-[#2D1B36] transition-colors">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#F3F4F6] p-10 lg:p-12 rounded-b-3xl lg:rounded-3xl border border-gray-100 relative opacity-95"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <ShieldAlert className="w-5 h-5 text-gray-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900">
                                Not Suitable If...
                            </h3>
                        </div>

                        <ul className="space-y-6">
                            {notForYouItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
                                        <X className="w-3.5 h-3.5" />
                                    </div>
                                    <p className="text-gray-900 font-medium leading-relaxed">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <CtaPaymentModal
                            trigger={
                                <button className="relative group inline-block">
                                    <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative bg-[#2D1B36] text-white font-bold text-lg px-12 py-5 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <span className="relative flex items-center gap-3">
                                            YES, THIS IS ME - REGISTER NOW <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
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