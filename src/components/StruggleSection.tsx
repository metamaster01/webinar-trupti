'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { MicOff, AlertCircle, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

export default function StruggleSectionCompact() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative py-16 lg:py-10 bg-[#FAFAFA] overflow-hidden text-[#2D1B36] selection:bg-[#D4AF37] selection:text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#7D4A94]/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[80px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.4] mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#2D1B36] mb-4">
                                You prepare for meetings. <br />
                                You have the best solution.
                            </h2>
                            <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-4">
                                <p className="text-[#7D4A94] font-sans text-xl font-light italic">
                                    But when it&apos;s time to speak...
                                </p>
                                <div className="h-[1px] w-16 bg-[#D4AF37] hidden lg:block" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative py-4 inline-block"
                        >
                            <div className="relative">
                                <h1 className="text-6xl md:text-7xl font-serif text-[#2D1B36] tracking-widest relative z-10">
                                    silence
                                </h1>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <MicOff className="w-16 h-16 text-[#D4AF37] opacity-80" strokeWidth={1.5} />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[1px] bg-[#2D1B36] opacity-10 blur-sm" />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-[#D4AF37] pl-4"
                        >
                            You&apos;re not incapable. You&apos;re not lazy. <br />
                            <span className="font-bold text-[#2D1B36]">You&apos;re just stuck between knowing what to say and being able to say it confidently.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="pt-4 hidden lg:block"
                        >
                            <CtaPaymentModal
                                trigger={
                                    <button className="group relative inline-flex items-center justify-center bg-[#2D1B36] text-white font-bold text-lg px-8 py-4 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#2D1B36]/20 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <span className="relative flex items-center gap-2">
                                            REGISTER NOW <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                }
                            />
                        </motion.div>
                    </div>

                    <div className="perspective-[1000px] flex justify-center lg:justify-end"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative w-full max-w-md bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(45,27,54,0.08)] border border-gray-100 group"
                        >
                            <div style={{ transform: "translateZ(30px)" }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#7D4A94]/10 flex items-center justify-center text-[#7D4A94]">
                                        <AlertCircle className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Every Evening, The Same Guilt:</p>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-50" />
                                    <h3 className="text-2xl md:text-3xl font-serif text-[#2D1B36] leading-relaxed pl-2 italic">
                                        &quot;Main kaam toh karta hoon, <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D4A94] to-[#D4AF37] font-bold not-italic decoration-[#D4AF37]/30 underline decoration-wavy underline-offset-4">
                                            par bolta nahi.
                                        </span>&quot;
                                    </h3>
                                </div>
                            </div>

                            <div
                                className="absolute -top-6 -right-6 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:scale-110 transition-transform"
                                style={{ transform: "translateZ(-20px)" }}
                            />
                            <div
                                className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#7D4A94]/5 rounded-full blur-2xl group-hover:scale-110 transition-transform"
                                style={{ transform: "translateZ(-30px)" }}
                            />
                        </motion.div>
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-12 flex justify-center lg:hidden"
                >
                    <CtaPaymentModal
                        trigger={
                            <button className="group relative inline-flex items-center justify-center bg-[#2D1B36] text-white font-bold text-lg px-8 py-4 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#2D1B36]/20 transition-all duration-300 w-full max-w-xs">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative flex items-center justify-center gap-2">
                                    REGISTER NOW <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        }
                    />
                </motion.div>
            </div>

            <style jsx global>{`
              .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
}