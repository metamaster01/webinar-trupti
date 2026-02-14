'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

// --- DATA ---
const testimonials = [
    {
        id: 1,
        name: "Priya M.",
        role: "IT Manager, Pune",
        result: "Promoted to Senior Manager",
        quote: "₹11 LPA to ₹19 LPA in 4 months. All because I stopped staying silent in leadership meetings.",
        initial: "PM",
        color: "bg-purple-100 text-purple-700"
    },
    {
        id: 2,
        name: "Amit K.",
        role: "Sales Lead, Mumbai",
        result: "₹11 LPA → ₹18 LPA + Team Lead",
        quote: "My junior was interviewing for MY promotion. 60 days later, I got it. ₹7L jump.",
        initial: "AK",
        color: "bg-blue-100 text-blue-700"
    },
    {
        id: 3,
        name: "Rahul P.",
        role: "Business Analyst, Bangalore",
        result: "Finally broke the ceiling",
        quote: "Stuck at 'Senior Executive' for 3 years. Now interviewing for Manager roles at ₹22 LPA.",
        initial: "RP",
        color: "bg-green-100 text-green-700"
    },
    {
        id: 4,
        name: "Neha D.",
        role: "Marketing Manager, Nagpur",
        result: "Plus 2 competing job offers",
        quote: "I was Marathi medium. English froze me for years. Now I negotiate offers confidently. ₹9L to ₹16L.",
        initial: "ND",
        color: "bg-orange-100 text-orange-700"
    }
];

// --- CARD COMPONENT ---
const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => {
    return (
        <div className="h-full p-6 md:p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(31,38,135,0.15)] transition-all duration-500 relative group overflow-hidden flex flex-col justify-between">
            {/* Glass Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />

            <div>
                {/* Header: User Info */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-full ${data.color} flex items-center justify-center font-bold text-lg shadow-inner`}>
                        {data.initial}
                    </div>
                    <div>
                        <h4 className="font-bold text-[#2D1B36]">{data.name}</h4>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{data.role}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-[#2D1B36] font-serif text-lg leading-relaxed mb-6 italic opacity-90 relative z-10">
                    &quot;{data.quote}&quot;
                </p>
            </div>

            {/* Result Badge */}
            <div className="relative z-10 mt-auto pt-4 border-t border-[#D4AF37]/20">
                <p className="text-xs font-bold text-[#7D4A94] uppercase tracking-wider mb-1">Result:</p>
                <p className="font-bold text-[#2D1B36] bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg inline-block border border-[#D4AF37]/20">
                    {data.result}
                </p>
            </div>

            {/* Decorative Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#2D1B36]/5 rotate-180" />
        </div>
    );
};

// --- MAIN SECTION COMPONENT ---
export default function SuccessStoriesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-Slider Logic (3 Seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // 3 Seconds

        return () => clearInterval(timer);
    }, []);

    // Logic to determine visible cards based on screen size could go here, 
    // but for a smooth simple slider, we will rotate the array based on index.

    // Create a rotated array so the "current" index is always first
    const visibleTestimonials = [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, currentIndex)
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Blobs for Glassmorphism Context */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#7D4A94]/10 rounded-full blur-[80px] -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#2D1B36] mb-4">
                        They Had The Same Problem. <br />
                        <span className="italic text-[#7D4A94]">Here&apos;s What Changed.</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-flex border border-white/50 shadow-sm mt-4">
                        <span className="flex gap-0.5">
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                        </span>
                        <span>Rated 4.9/5 by Professionals</span>
                    </div>
                </div>

                {/* --- SLIDER CONTAINER --- */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">

                        {/* We display 3 cards on desktop, 1 on mobile. 
                            Using AnimatePresence for smooth transitions if needed, 
                            but a simple mapped layout works best for "Trustpilot" style rows */}

                        {/* Card 1 (Always Visible) */}
                        <motion.div
                            layout
                            key={visibleTestimonials[0].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/3 min-h-[320px]"
                        >
                            <TestimonialCard data={visibleTestimonials[0]} />
                        </motion.div>

                        {/* Card 2 (Hidden on mobile) */}
                        <motion.div
                            layout
                            key={visibleTestimonials[1].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="hidden md:block w-1/3 min-h-[320px]"
                        >
                            <TestimonialCard data={visibleTestimonials[1]} />
                        </motion.div>

                        {/* Card 3 (Hidden on mobile/tablet) */}
                        <motion.div
                            layout
                            key={visibleTestimonials[2].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="hidden lg:block w-1/3 min-h-[320px]"
                        >
                            <TestimonialCard data={visibleTestimonials[2]} />
                        </motion.div>

                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-[#7D4A94]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}