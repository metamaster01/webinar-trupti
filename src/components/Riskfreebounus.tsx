'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, BookOpen } from 'lucide-react';

export default function BonusRiskFreeSection() {
    return (
        <section className="py-20 bg-white text-[#2D1B36] font-sans relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.3] pointer-events-none" />
            <div className="absolute right-[-10%] top-[20%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                {/* --- PART 1: THE BONUS VISUAL --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    {/* Top Banner */}
                    <div className="bg-[#FFF5F5] border-2 border-[#D4AF37] px-6 py-3 rounded-t-2xl text-center shadow-sm w-full max-w-lg mx-auto relative z-10">
                        <p className="font-serif font-bold text-[#2D1B36] text-sm md:text-lg uppercase tracking-wide">
                            UNLOCK <span className="text-[#D4AF37]">BONUSES WORTH ₹10,000+</span> <br />
                            BY BOOKING YOUR CONSULTATION TODAY
                        </p>
                    </div>

                    {/* Product Mockup Representation */}
                    <div className="bg-gradient-to-br from-[#FFE4C4] to-[#FACC15]/20 w-full max-w-lg rounded-b-3xl p-8 md:p-12 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(212,175,55,0.15)] border-x border-b border-[#D4AF37]/20 relative">

                        {/* 3D Book/Product Effect using CSS */}
                        <div className="relative w-48 h-60 md:w-56 md:h-72 bg-white rounded-r-xl rounded-l-md shadow-2xl flex flex-col items-center justify-center p-4 border-l-8 border-[#D4AF37] mb-6 transform hover:scale-105 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white rounded-r-xl rounded-l-md" />
                            <div className="relative z-10 flex flex-col items-center">
                                <Zap className="w-12 h-12 text-[#D4AF37] mb-4 fill-[#D4AF37]/20" />
                                <h3 className="font-serif font-bold text-xl leading-tight text-[#2D1B36] mb-2">5-MIN <br /> INSTANT CALM <br /> TECHNIQUE</h3>
                                <div className="w-10 h-1 bg-[#2D1B36] rounded-full mb-3" />
                                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Relax Body & Mind</p>
                            </div>
                            {/* Pages effect */}
                            <div className="absolute top-1 right-[-10px] w-4 h-[98%] bg-white border border-gray-200 rounded-r-sm shadow-sm skew-y-12 origin-top-left -z-10" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-[#2D1B36] mb-2">5-MIN INSTANT CALM TECHNIQUE</h3>
                        <p className="text-gray-600 font-medium">Relax Your Body & Mind Instantly Before High-Stakes Meetings</p>
                    </div>
                </motion.div>


                {/* --- PART 2: THE ROADMAP & RISK REVERSAL --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FAFAFA] rounded-[2.5rem] p-6 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden"
                >
                    {/* Highlighted Headline */}
                    <div className="text-center mb-10 relative">
                        <span className="inline-block bg-[#FACC15]/30 px-4 py-2 transform -rotate-1 rounded-lg">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D1B36] leading-snug">
                                We&apos;re Taking All The Risk Off Your Shoulders <br className="hidden md:block" />
                                So You Can Finally Get The Promotion You Deserve
                            </h2>
                        </span>
                    </div>

                    {/* Checklist Content */}
                    <div className="space-y-8">

                        {/* Point 1: The Roadmap */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00B67A] flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl text-[#2D1B36] mb-2">
                                    In Your 45-Minute Breakthrough Call:
                                </h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    You&apos;ll Receive A Clear, <span className="font-bold text-[#2D1B36] bg-yellow-100 px-1">Personalized Roadmap</span> To Help You Understand The Root Cause Of Your Meeting Freeze And How To Overcome Silence, Stolen Ideas, Career Invisibility & Promotion Blocks— <span className="font-black text-[#7D4A94] tracking-wider">PERMANENTLY.</span>
                                </p>
                            </div>
                        </div>

                        {/* Point 2: The Guarantee */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00B67A] flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl text-[#2D1B36] mb-2">
                                    Our &quot;No-Risk&quot; Promise:
                                </h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    And If You Don&apos;t Walk Away With Clarity, Insight, Or Even The Smallest Shift, <span className="font-bold border-b-2 border-red-400">We&apos;ll Return Your Full Consultation Fee.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closer */}
                    <div className="mt-12 text-center border-t border-gray-200 pt-8">
                        <p className="text-lg font-serif font-bold text-gray-500 mb-4">
                            No Questions. No Awkward Calls. No Pressure.
                        </p>
                        <h3 className="text-2xl md:text-4xl font-black text-[#2D1B36] uppercase tracking-tight">
                            YOUR CAREER GROWTH <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37]">
                                MATTERS MORE TO US!
                            </span>
                        </h3>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}