'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';
import PixelTracker from '@/components/PixelTracker';

export default function VSLThankYouPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#2D1B36] font-sans selection:bg-[#D4AF37] selection:text-white relative overflow-hidden flex flex-col items-center py-12 px-4">
            <PixelTracker eventName="Purchase" />

            {/* --- BACKGROUND TEXTURES --- */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#7D4A94]/5 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl">

                {/* --- 1. SUCCESS HEADER --- */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative border border-green-200"
                    >
                        <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping opacity-20" />
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#2D1B36]"
                    >
                        Payment Successful! <br />
                        <span className="text-[#00B67A]">You&apos;re Officially In.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-lg max-w-xl mx-auto"
                    >
                        A receipt has been sent to your email.
                    </motion.p>
                </div>

                {/* --- 2. CALENDAR STEP --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white border border-gray-200 rounded-[2rem] shadow-[0_20px_60px_rgba(45,27,54,0.08)] overflow-hidden"
                >
                    {/* Header Strip */}
                    <div className="bg-[#2D1B36] text-white py-4 px-6 text-center">
                        <p className="font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4 text-[#FACC15]" />
                            Final Step: Book Your Slot Below
                        </p>
                    </div>

                    <div className="p-6 md:p-10 text-center">
                        <h2 className="text-2xl font-serif font-bold text-[#2D1B36] mb-2">
                            Schedule Your 1:1 Strategy Call
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            Select a time that works for you. Please show up 5 minutes early.
                        </p>

                        {/* --- CALENDLY EMBED CONTAINER --- */}
                        <div className="w-full bg-white rounded-xl overflow-hidden relative">
                            {/* Calendly inline widget begin */}
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/talkanwin/30min"
                                style={{ minWidth: '320px', height: '700px' }}
                            />
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                            {/* Calendly inline widget end */}
                        </div>


                    </div>
                </motion.div>

                {/* --- 3. NEXT STEPS --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">What happens next?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="block font-bold text-[#2D1B36] mb-1">1. Check Email</span>
                            <span className="text-xs text-gray-500">Look for the confirmation & receipt.</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm opacity-50">
                            <span className="block font-bold text-[#2D1B36] mb-1">2. Join Call</span>
                            <span className="text-xs text-gray-500">Use the Zoom link in the calendar invite.</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm opacity-50">
                            <span className="block font-bold text-[#2D1B36] mb-1">3. Get Plan</span>
                            <span className="text-xs text-gray-500">Receive your custom promotion roadmap.</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}