'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Gift, ArrowRight, Clock, ShieldCheck, Volume2 } from 'lucide-react';
import BonusRiskFreeSection from '@/components/Riskfreebounus';
import BioSection from '@/components/BioSection';
import SuccessStoriesSlider from '@/components/feedbackforvsl';

export default function VSLHero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <section className="relative min-h-screen bg-[#FAFAFA] text-[#2D1B36] font-sans selection:bg-[#D4AF37] selection:text-white pb-20 overflow-x-hidden">

                {/* --- BACKGROUND TEXTURES --- */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#7D4A94]/5 to-transparent pointer-events-none" />

                {/* --- 1. URGENCY TOP BAR --- */}
                <div className="w-full bg-[#2D1B36] text-white py-3 px-4 text-center relative z-20 shadow-md">
                    <p className="text-[10px] md:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                        Warning: YOUR SILENCE IS COSTING YOU <span className="text-[#FACC15] border-b border-[#FACC15]">₹6-12 LAKHS/YEAR</span>
                    </p>
                </div>

                <div className="container mx-auto px-4 pt-8 md:pt-16 max-w-5xl relative z-10 flex flex-col items-center">

                    {/* --- 2. HEADLINES --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 md:mb-10 max-w-4xl"
                    >
                        <h1 className="text-3xl md:text-6xl font-serif font-bold leading-[1.15] mb-6 text-[#2D1B36]">
                            STOP FREEZING IN MEETINGS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37]">
                                & START GETTING PROMOTED
                            </span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light px-2">
                            Steal the <span className="font-bold text-[#2D1B36]">3-System Communication Framework</span> used by 47 professionals to go from Invisible to <span className="font-bold text-[#7D4A94]">Confident Leader</span> with <span className="bg-[#D4AF37]/20 px-1 font-bold whitespace-nowrap">₹15-25 LPA Offers</span>.
                        </p>
                    </motion.div>

                    {/* --- 3. VIDEO PLAYER --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-full max-w-4xl relative group mb-6"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#7D4A94] to-[#D4AF37] rounded-2xl opacity-30 blur-xl" />

                        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            {!isPlaying ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-colors hover:bg-black/30" onClick={() => setIsPlaying(true)}>
                                    <h3 className="text-white/90 text-3xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-lg mb-4 md:mb-6 select-none text-center px-4">
                                        Watch The Framework
                                    </h3>

                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-[#7D4A94] rounded-full flex items-center justify-center pl-1 md:pl-2 shadow-[0_0_40px_rgba(125,74,148,0.6)] animate-pulse hover:scale-110 transition-transform duration-300 relative z-10">
                                        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
                                        <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                                    </div>

                                    <p className="mt-6 text-white/90 font-bold tracking-widest uppercase text-[10px] md:text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 flex items-center">
                                        <Volume2 className="w-3 h-3 md:w-4 md:h-4 inline ml-1 mr-2" />
                                        Tap to Unmute
                                    </p>
                                </div>
                            ) : (
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/j9o8casQfnQ?autoplay=1"
                                    title="VSL Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}

                            {!isPlaying && (
                                <img
                                    src="https://img.youtube.com/vi/j9o8casQfnQ/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                />
                            )}
                        </div>
                    </motion.div>

                    {/* --- 4. BONUS INCENTIVE --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full max-w-4xl bg-[#FFFBF0] border border-[#D4AF37]/30 rounded-xl p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left shadow-sm"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 text-[#D4AF37]">
                            <Gift className="w-6 h-6 md:w-8 md:h-8 animate-bounce" />
                        </div>
                        <div>
                            <p className="text-[#2D1B36] font-medium text-sm md:text-lg leading-relaxed">
                                <span className="font-bold text-[#7D4A94] uppercase text-xs tracking-wider block mb-1">Exclusive Bonus Unlocked At The End</span>
                                Watch till the end to unlock bonuses worth <span className="font-bold bg-[#D4AF37]/20 px-1">₹25,000+</span> to help you speak up in your next meeting & take credit for your work.
                            </p>
                        </div>
                    </motion.div>

                    {/* --- 5. CONSULTATION CTA --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center w-full max-w-2xl relative mb-20"
                    >
                        <div className="relative inline-block w-full md:w-auto group">
                            {/* 80% OFF BADGE */}
                            <div className="absolute -top-4 right-0 md:-right-8 md:-top-5 z-20">
                                <div className="bg-[#FACC15] text-[#2D1B36] font-black text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 shadow-lg border border-white rotate-6 origin-bottom-left whitespace-nowrap">
                                    80% OFF TODAY
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                            <a
                                href="https://rzp.io/rzp/Y5WTaA6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative bg-[#2D1B36] text-white py-4 px-6 md:py-5 md:px-12 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto flex flex-col items-center justify-center gap-1 border border-[#7D4A94]/50 cursor-pointer text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                                <div className="relative flex items-center justify-center gap-2 md:gap-3">
                                    <span className="font-bold text-base md:text-xl tracking-wide uppercase">Book Your 1:1 Call Now</span>
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                                </div>

                                <div className="relative text-sm font-medium text-gray-300 flex items-center justify-center gap-2 mt-1">
                                    <span className="line-through text-gray-500 decoration-red-500 decoration-2 text-xs md:text-base">₹999</span>
                                    <span className="text-[#D4AF37] font-bold text-base md:text-xl">Just ₹9</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-500 mx-1" />
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Limited Spots</span>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3 md:w-4 md:h-4 text-[#7D4A94]" /> 45 Min Strategy Call</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300 hidden md:block" />
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#00B67A]" /> 100% Satisfaction Guarantee</span>
                        </div>
                    </motion.div>

                    {/* --- 6. PREMIUM GUARANTEE SECTION (UPDATED) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-3xl mx-auto px-4"
                    >
                        <div className="bg-[#FFFBF0] border-2 border-dashed border-[#D4AF37]/50 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center group hover:border-[#D4AF37] transition-colors duration-300">

                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-xl" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-xl" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-xl" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37] rounded-br-xl" />

                            {/* Gold Shield Badge */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-b from-[#FACC15] to-[#D4AF37] rounded-full p-1 shadow-xl flex items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-white opacity-30" />
                                    <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-md" />
                                    <div className="absolute -bottom-2 bg-white text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-widest border border-[#D4AF37]/20">
                                        Risk Free
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl md:text-3xl font-serif font-bold text-[#2D1B36] mb-4 leading-tight">
                                100% Money-Back Guarantee – <br className="hidden md:block" />
                                <span className="text-[#00B67A]">Don&apos;t Speak Up in 30 Days?</span> <br />
                                Get Full Refund + <span className="text-[#7D4A94]">FREE Coaching</span>
                            </h2>

                            <div className="text-[10px] md:text-xs text-red-500/80 font-medium bg-red-50 px-4 py-3 rounded-lg border border-red-100 inline-block leading-relaxed">
                                (If there are no slots available, it means we already have more applications than we&apos;re accepting right now. Please check back again in a few weeks to reapply)
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
            <BonusRiskFreeSection />
            <BioSection />
            <SuccessStoriesSlider />
        </>
    );
}