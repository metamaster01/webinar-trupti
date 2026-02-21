'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';
import { Check, Calendar, Bell, ShieldCheck } from 'lucide-react';
import PixelTracker from '@/components/PixelTracker';

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#2D1B36] selection:bg-[#7D4A94] selection:text-white flex flex-col items-center justify-center relative overflow-hidden p-6 font-sans">
            <PixelTracker eventName="Purchase" />

            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#7D4A94]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />

            <div className="relative z-10 w-full max-w-3xl py-12">

                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative border border-green-100"
                    >
                        <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping opacity-20" />
                        <Check className="w-10 h-10 text-green-600 stroke-[4]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif mb-4 text-[#2D1B36]"
                    >
                        Success! <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#B76CD6]">You&apos;re Registered.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 text-lg md:text-xl font-light"
                    >
                        Your payment is confirmed and your workshop seat is officially secured.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white border border-[#7D4A94]/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_60px_rgba(45,27,54,0.08)] group"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7D4A94] via-[#B76CD6] to-[#7D4A94]" />

                    <div className="grid gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#7D4A94]/10 flex items-center justify-center shrink-0">
                                <Bell className="w-6 h-6 text-[#7D4A94]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Stay Tuned</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We have received your details. A workshop reminder along with the access link will be shared with you via <span className="font-bold text-[#2D1B36]">SMS/WhatsApp on your registered mobile number</span> before the session begins.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                                <Calendar className="w-6 h-6 text-[#D4AF37]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Mark Your Calendar</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The workshop is scheduled for <span className="font-bold text-[#2D1B36]">January 8th, 2026 at 7:00 PM</span>. Make sure to block this time off to focus on your transformation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center text-center">
                        <p className="text-sm text-gray-400 max-w-lg mb-6">
                            &quot;The first step to commanding respect is showing up for yourself.&quot;
                        </p>
                        <div className="h-1 w-12 bg-[#7D4A94] rounded-full opacity-20" />
                    </div>
                </motion.div>

                {/* Calendly Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 w-full"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif mb-3 text-[#2D1B36]">Wait! One Last Step...</h2>
                        <p className="text-gray-600 text-lg">Book your 1-on-1 Strategy Session below to accelerate your results.</p>
                    </div>

                    <div className="bg-white border border-[#7D4A94]/10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(45,27,54,0.08)]">
                        <div
                            className="calendly-inline-widget w-full"
                            data-url="https://calendly.com/talkanwin/30min"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>

                    <Script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        strategy="lazyOnload"
                    />
                </motion.div>
            </div>
        </main>
    );
}