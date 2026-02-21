'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, ArrowRight, Lock } from 'lucide-react';
import SuccessStoriesSlider from '../../components/feedbackforvsl';
import OutcomeComparisonSection from '../../components/whychoosethis6minvsl';
import OptinPopup from '../../components/OptinPopup';
import PixelTracker from '@/components/PixelTracker';

export default function VSLOptinPage() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#2D1B36] font-sans selection:bg-[#D4AF37] selection:text-white flex flex-col relative overflow-hidden">
            <PixelTracker eventName="PageView" />

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#7D4A94]/5 to-transparent pointer-events-none" />

            {/* --- TOP BAR --- */}
            <div className="w-full bg-[#2D1B36] text-white py-3 px-4 text-center relative z-20">
                <p className="text-xs md:text-sm font-bold tracking-wide uppercase">
                    For Corporate Professionals Stuck at <span className="text-[#D4AF37]">₹8-12 LPA</span> While Less-Qualified Peers Earn <span className="text-[#D4AF37]">₹20+ LPA</span>
                </p>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16 flex-grow flex flex-col items-center justify-center relative z-10 max-w-5xl">

                {/* --- HEADLINES --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.2] mb-6 text-[#2D1B36]">
                        They Take Credit For Their Work. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37] font-bold italic">
                            You Can&apos;t Even Speak Up in Meetings.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Watch this <span className="font-bold text-[#2D1B36] bg-[#D4AF37]/20 px-1">6-minute video</span> to discover the exact framework 47 professionals used to go from silent & invisible to confident & promoted.
                    </p>
                </motion.div>

                {/* --- CLICKABLE VIDEO THUMBNAIL (Triggers Popup) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-full max-w-4xl relative group cursor-pointer"
                    onClick={handleOpenModal}
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#7D4A94] to-[#D4AF37] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/30">

                            <h3 className="text-white/90 text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-lg mb-4 select-none">
                                Click Play
                            </h3>

                            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#7D4A94] rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(125,74,148,0.6)] animate-pulse group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                            </div>

                            <p className="mt-6 text-white/80 font-medium tracking-widest uppercase text-xs md:text-sm">
                                Make sure your sound is on <Volume2 className="w-4 h-4 inline ml-1" />
                            </p>
                        </div>

                        <img
                            src="https://www.truptiwarjurkar.com/gallery6.png"
                            alt="Video Thumbnail"
                            className="absolute inset-0 w-full h-full object-cover -z-10 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

                {/* --- CTA BUTTON (Triggers Popup) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center w-full max-w-2xl"
                >
                    <button
                        onClick={handleOpenModal}
                        className="relative group w-full md:w-auto"
                    >
                        <div className="absolute inset-0 bg-[#2D1B36] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative bg-[#2D1B36] text-white font-bold text-xl md:text-2xl py-6 px-12 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center gap-2 tracking-wide">
                                WATCH FREE TRAINING NOW <ArrowRight className="w-6 h-6 text-[#D4AF37]" />
                            </span>
                        </div>
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-serif italic">
                        <Lock className="w-3 h-3 text-[#D4AF37]" />
                        <span>100% Free • Instant Access</span>
                    </div>
                </motion.div>

            </div>

            <SuccessStoriesSlider />
            <OutcomeComparisonSection />

            {/* --- REUSABLE POPUP MODAL --- */}
            <OptinPopup isOpen={showModal} onClose={handleCloseModal} />

        </main>
    );
}