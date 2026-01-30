'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

const faqs = [
    {
        q: "Is this just another motivational webinar?",
        a: "No. This is practical, script-based communication training rooted in 8 years of corporate experience + pageant-level confidence coaching. You get tools, not theory."
    },
    {
        q: "Will I get a recording?",
        a: "No. This is a live experience only. Confidence shifts happen in real-time. You need to be present to practice and get feedback."
    },
    {
        q: "I'm very busy. Is this worth 60 minutes?",
        a: "If you're losing 4+ hours per week in meeting anxiety and lost opportunities, 60 minutes to fix that is the best ROI you'll get. One confident meeting can change your quarter."
    },
    {
        q: "Is this for students or job seekers?",
        a: "No. This is specifically for working professionals (₹8-25 LPA) in corporate roles who are already capable but held back by communication gaps."
    },
    {
        q: "Only ₹9? What's the catch?",
        a: "No catch. It's an entry point to show you what's possible. Once you experience what communication confidence feels like through scripts and practice, you'll see the value. Results speak for themselves."
    },
    {
        q: "I'm from Marathi/Hindi medium. Will this work for me?",
        a: "YES. I'm from Marathi medium too. That's exactly why my scripts work in Hinglish and don't require \"perfect\" English. You'll see yourself in my story."
    },
    {
        q: "What if I can't attend live?",
        a: "Please don't register. No recording will be provided. Wait for our next live session announcement or check for alternative dates."
    },
    {
        q: "What will I need for the session?",
        a: "A quiet space, a notebook, and an open mind. We'll send the Zoom link after registration."
    },
    {
        q: "Will this actually work for someone like me?",
        a: "If you're technically competent but communication-blocked - yes. If you're looking for a magic pill without practice - no. I've helped 500+ professionals just like you. Show up, experience it, decide for yourself."
    },
    {
        q: "I've tried other courses. How is this different?",
        a: "Other courses give you recordings to watch alone. I give you scripts to use tomorrow + live practice + 90-day monitoring. It's the accountability and customization that makes the difference."
    }
];

const FloatingQ = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <motion.div
            style={{ rotateY: rotate, y }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center perspective-[1000px] pointer-events-none"
        >
            <div className="text-[15rem] md:text-[20rem] font-serif font-black text-[#F3EEF6] relative transform-style-3d">
                <span className="absolute inset-0 text-[#2D1B36]/5 transform translate-z-[-20px]">?</span>
                <span className="absolute inset-0 text-[#D4AF37]/10 transform translate-z-[-10px]">?</span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#2D1B36] to-[#7D4A94] drop-shadow-2xl">?</span>
            </div>
        </motion.div>
    );
};

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 bg-[#FAFAFA] font-sans text-[#2D1B36] overflow-hidden">
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#F3EEF6] -skew-x-12 transform translate-x-1/2 opacity-50 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-none mb-6">
                                Frequently Asked <br />
                                <span className="italic text-[#7D4A94]">Questions</span>
                            </h2>
                        </motion.div>

                        <div className="hidden lg:flex justify-center items-center py-10">
                            <FloatingQ />
                        </div>

                        <div className="hidden lg:block mt-8">
                            <CTAButton />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                faq={faq}
                                isOpen={activeIndex === index}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            />
                        ))}

                        <div className="lg:hidden mt-12 text-center">
                            <CTAButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AccordionItem = ({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={false}
            animate={{
                backgroundColor: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                scale: isOpen ? 1.02 : 1,
                borderColor: isOpen ? "rgba(212,175,55,0.4)" : "rgba(0,0,0,0.05)",
                boxShadow: isOpen ? "0 20px 40px -10px rgba(0,0,0,0.08)" : "none"
            }}
            className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group ${isOpen ? 'z-10' : 'z-0'}`}
            onClick={onClick}
        >
            <div className="p-6 md:p-8 flex justify-between items-start gap-4">
                <h3 className={`text-lg md:text-xl font-serif font-medium leading-snug transition-colors duration-300 ${isOpen ? 'text-[#7D4A94]' : 'text-[#2D1B36] group-hover:text-gray-600'}`}>
                    {faq.q}
                </h3>

                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#D4AF37] border-[#D4AF37] text-white rotate-180' : 'bg-transparent border-gray-300 text-gray-400'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
                    >
                        <div className="px-6 md:px-8 pb-8 pt-0">
                            <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/30 to-transparent mb-4" />
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {faq.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const CTAButton = () => (
    <div className="relative">
        <CtaPaymentModal
            trigger={
                <button className="relative group">
                    <div className="absolute inset-0 bg-[#FACC15] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-[#FACC15] text-[#2D1B36] font-bold text-lg px-8 py-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2">
                            REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </button>
            }
        />
    </div>
);