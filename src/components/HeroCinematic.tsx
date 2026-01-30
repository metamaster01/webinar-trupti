'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerText: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const wordVar: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.8, ease: [0.2, 1, 0.36, 1] }
    }
};

export default function HeroCinematic() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

    const xBack = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);
    const yBack = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]);
    const xFront = useTransform(springX, [-0.5, 0.5], ["2%", "-2%"]);
    const yFront = useTransform(springY, [-0.5, 0.5], ["2%", "-2%"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#FDF4FF] text-[#2D1B36] selection:bg-[#FACC15] selection:text-[#2D1B36]"
        >

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />


                <motion.div
                    style={{ x: xBack, y: yBack }}
                    className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#7D4A94] rounded-full blur-[120px] opacity-20 mix-blend-multiply"
                />


                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], ["10%", "-10%"]), y: useTransform(springY, [-0.5, 0.5], ["10%", "-10%"]) }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#FACC15] rounded-full blur-[150px] opacity-30 mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 p-5">
                <div className="grid lg:grid-cols-12 gap-1 items-center">

                    {/* Left Column (Text & Desktop CTA) */}
                    <div className="lg:col-span-7 relative z-20">
                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-[1px] w-12 bg-[#7D4A94]" />

                            <span className="text-[#7D4A94] font-bold tracking-[0.2em] text-xs uppercase">
                                For Mid-Career to Senior Professionals
                            </span>
                        </motion.div>

                        <motion.h1
                            initial="hidden" animate="visible" variants={staggerText}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8"
                        >
                            <span className="block overflow-hidden"><motion.span variants={wordVar} className="block text-[#2D1B36]">You Have</motion.span></span>
                            <span className="block overflow-hidden"><motion.span variants={wordVar} className="block text-[#2D1B36]">Brilliant Ideas...</motion.span></span>
                            <span className="block overflow-hidden pt-2">
                                <motion.span variants={wordVar} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#B76CD6] italic font-light">
                                    But They Die
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden"><motion.span variants={wordVar} className="block">In Your Throat.</motion.span></span>
                        </motion.h1>

                        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>

                            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-light border-l border-[#7D4A94]/30 pl-6 mb-10">
                                While Others Get Promoted and you freeze while your peers speak up, grab opportunities, and take credit for your ideas.
                                <br /><br />
                                <span className="text-[#2D1B36] font-bold">Here&apos;s How to Finally Speak Up, Get Recognized, and Command the Senior Role and Salary You&apos;ve Been Chasing.</span>
                            </p>
                        </motion.div>

                        {/* Desktop CTA: Visible only on lg screens and up */}
                        <motion.div
                            variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.8 }}
                            className="hidden lg:flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                        >
                            <CtaPaymentModal
                                trigger={
                                    <button className="relative group">
                                        <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-10 py-5 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-xl">
                                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                            <span className="relative flex items-center gap-2">
                                                I&apos;M READY TO OWN MY VOICE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </button>
                                }
                            />
                        </motion.div>
                    </div>

                    {/* Right Column (Image & Mobile CTA) */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0 perspective-1000 flex flex-col items-center">
                        <div className="relative h-[600px] w-full flex items-center justify-center">
                            <motion.div
                                style={{ rotate: xBack, scale: 1.1 }}
                                className="absolute inset-0 border-[1px] border-[#7D4A94]/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"
                            />

                            <motion.div
                                style={{ x: xFront, y: yFront, rotateY: xFront, rotateX: yFront }}
                                className="relative w-full h-[110%] max-w-md"
                            >
                                <div className="relative z-20 w-full h-full rounded-[120px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(45,27,54,0.3)] border-4 border-white">
                                    <img
                                        src="https://gold-gull-715938.hostingersite.com/wp-content/uploads/2026/01/photo-no-1.JPG-scaled.webp"
                                        alt="Trupti Warjurkar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>


                                <motion.div
                                    initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
                                    className="absolute top-20 -right-6 md:-right-12 bg-white/80 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-xl max-w-[180px] z-30"
                                >
                                    <Sparkles className="w-6 h-6 text-[#FACC15] mb-2" />
                                    <p className="text-xs text-gray-800 leading-relaxed font-medium">
                                        The Proven Communication System That Transforms Silent Mid-Level Professionals.
                                    </p>
                                </motion.div>


                                <motion.div
                                    initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 1 }}
                                    className="absolute bottom-32 -left-6 md:-left-12 bg-[#FACC15] p-5 rounded-2xl shadow-[0_0_30px_rgba(250,204,21,0.3)] max-w-[200px] z-30"
                                >
                                    <p className="text-[#2D1B36] font-bold text-sm leading-tight mb-1">
                                        Confident Leader
                                    </p>
                                    <p className="text-[10px] text-[#2D1B36]/80 font-medium uppercase tracking-wide">
                                        Who Get Heard, Valued, and Paid What They&apos;re Worth
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Mobile CTA: Visible only on small/medium screens, appears AFTER image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="block lg:hidden mt-20 relative z-30"
                        >
                            <CtaPaymentModal
                                trigger={
                                    <button className="relative group">
                                        <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-10 py-5 rounded-full overflow-hidden shadow-xl">
                                            <span className="relative flex items-center gap-2">
                                                I&apos;M READY TO OWN MY VOICE <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </div>
                                    </button>
                                }
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}