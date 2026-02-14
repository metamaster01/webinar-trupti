'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Crown, Mic, Quote } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function EditorialStorySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const yImage2 = useTransform(scrollYProgress, [0, 1], [50, -120]);
    const textParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);

    return (
        <section ref={containerRef} className="relative py-16 lg:py-12 bg-[#FAFAFA] font-sans text-[#2D1B36] overflow-hidden">
            <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h1 className="text-[15vw] font-serif font-black leading-none text-[#2D1B36] whitespace-nowrap">
                    TRANSFORMATION
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        className="lg:col-span-7 order-1 pt-0 lg:pt-12"
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
                                The Founder&apos;s Journey
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-2">
                            From <span className="italic text-gray-400">Marathi Medium Silence</span> <br />
                            to <span className="text-[#7D4A94] font-bold">Miss Maharashtra Stage</span>
                        </h2>
                    </motion.div>

                    <div className="lg:col-span-5 lg:row-span-2 order-2 relative h-[450px] lg:h-[800px] w-full my-4 lg:my-0">
                        <motion.div
                            style={{ y: yImage1 }}
                            className="absolute top-0 right-[-10%] w-[70%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl z-0 opacity-100"
                        >
                            <img src="https://gold-gull-715938.hostingersite.com/wp-content/uploads/2026/01/photo-no-4.JPG-scaled.webp" alt="Corporate" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div
                            style={{ y: yImage2 }}
                            className="absolute top-24 lg:top-32 left-4 w-[75%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(45,27,54,0.3)] border-[8px] border-white z-20 bg-white"
                        >
                            <img src="https://gold-gull-715938.hostingersite.com/wp-content/uploads/2026/01/photo-no-3.JPG-scaled.webp" alt="Pageant" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-lg p-4 rounded-xl border border-white/50 shadow-lg">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-bold text-[#7D4A94] uppercase tracking-wider mb-1">Current Status</p>
                                        <p className="font-serif text-[#2D1B36] text-lg leading-none">Spotlight Owner</p>
                                    </div>
                                    <Mic size={20} className="text-[#D4AF37]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: [0, 0, 1, 1] }}
                            className="absolute bottom-1/4 -right-10 w-32 h-32 z-10 opacity-30 pointer-events-none"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#D4AF37]">
                                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text className="text-[14px] font-bold uppercase tracking-widest">
                                    <textPath href="#curve">
                                        Confidence • Clarity • Command •
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        className="lg:col-span-7 order-3"
                    >
                        <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-600 mb-12">
                            <div className="space-y-6">
                                <p>
                                    <span className="drop-cap float-left text-5xl font-serif text-[#D4AF37] mr-3 mt-[-8px]">I</span>
                                    came from a Marathi medium school - where speaking English felt impossible, and fear kept me hidden.
                                </p>
                                <p>
                                    With 8 years across sales, marketing, research, and IT, I faced the same wall: <strong className="text-[#2D1B36]">Big ideas, zero voice.</strong> Meetings? I&apos;d freeze. Presentations? Stutter. Opportunities slipped away because I couldn&apos;t communicate my worth.
                                </p>
                            </div>
                            <div className="space-y-6 relative">
                                <div className="absolute -left-4 top-2 bottom-2 w-[1px] bg-gray-200 hidden md:block" />
                                <p>
                                    Then came my breakthrough. I turned my passion for communication into a profession - mastering confidence techniques that leveled up my life.
                                </p>
                                <div className="bg-[#2D1B36] text-white p-4 rounded-xl shadow-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Crown size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Crown Jewel</span>
                                    </div>
                                    <p className="font-serif text-xl italic">
                                        Miss Maharashtra 2024 First Runner-Up.
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-[#7D4A94]">
                                    From stage fright to spotlight ownership, communication made it happen.
                                </p>
                            </div>
                        </div>

                        <motion.div style={{ y: textParallax }} className="relative bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] group hover:border-[#D4AF37]/30 transition-colors duration-500">
                            <Quote className="absolute top-8 left-8 text-gray-100 w-16 h-16 -z-10" />
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#2D1B36] mb-2">Here&apos;s The Truth I Live</h3>
                                    <p className="text-gray-600 mb-4">
                                        Communication isn&apos;t a skill - <span className="bg-[#D4AF37]/20 px-1">it&apos;s your life-changer.</span> It turns fear into stages, ideas into income, silence into success.
                                    </p>
                                    <p className="text-sm text-gray-500 italic">
                                        &quot;If you&apos;re from humble roots, battling invisible fears... I&apos;ve been there.&quot;
                                    </p>
                                </div>
                                <div className="hidden md:block w-[1px] h-20 bg-gray-100 mx-4" />
                                <div className="shrink-0 text-center md:text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mt-1">Founder, Triputi</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
              .wos-perspective-2000 { perspective: 2000px; }
            `}</style>
        </section>
    );
}