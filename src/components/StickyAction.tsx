'use client';

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import CtaPaymentModal from './CtaPaymentModal';

export default function StickyActionLight() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-[0_-5px_30px_rgba(0,0,0,0.05)] z-50 py-4 px-6">
            <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-3 text-[#7D4A94]">
                        <div className="bg-[#7D4A94]/10 p-2 rounded-lg">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7D4A94]">Workshop Date</span>
                            <span className="text-sm md:text-base font-bold text-[#2D1B36]">
                                8th Jan 2026, 7 PM
                            </span>
                        </div>
                    </div>
                </div>

                <div className="shrink-0">
                    <CtaPaymentModal
                        trigger={
                            <button className="group relative bg-[#2D1B36] text-white font-bold text-sm md:text-base py-3 px-8 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative flex items-center gap-2">
                                    REGISTER NOW <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        }
                    />
                </div>

            </div>
        </div>
    );
}