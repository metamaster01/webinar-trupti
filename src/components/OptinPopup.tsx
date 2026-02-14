'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Lock } from 'lucide-react';

interface OptinPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OptinPopup({ isOpen, onClose }: OptinPopupProps) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [utm, setUtm] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const keys = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_content",
            "utm_term",
            "gclid",
            "fclid",
        ];

        const data: Record<string, string> = {};
        keys.forEach((k) => {
            const v = params.get(k);
            if (v) data[k] = v;
        });

        setUtm(data);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send data to Pabbly Webhook using form-urlencoded for better CORS compatibility
            await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMDA0MzY1MjZjNTUzNzUxMzIi_pc", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    ...formData,
                    ...utm,
                    source_url: window.location.href,
                    timestamp: new Date().toISOString()
                }).toString(),
            });

            // Redirect to VSL Page
            window.location.href = '/vsl';
        } catch (error) {
            console.error("Error submitting to webhook:", error);
            // Fallback redirect
            window.location.href = '/vsl';
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#2D1B36]/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10"
                    >
                        <div className="bg-[#FAFAFA] px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-serif font-bold text-[#2D1B36] text-lg">Almost There...</h3>
                            <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-serif font-bold text-[#2D1B36] mb-2">Where should we send your training?</h2>
                                <p className="text-gray-500 text-sm">Enter your details below to get instant access.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Hidden UTM Inputs (Optional but requested) */}
                                {Object.keys(utm).map((key) => (
                                    <input key={key} type="hidden" name={key} value={utm[key]} />
                                ))}

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
                                    <input type="text" required placeholder="Ex. Rahul Sharma" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D4A94]/20 focus:border-[#7D4A94] text-[#2D1B36]"
                                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={loading} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                                    <input type="email" required placeholder="name@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D4A94]/20 focus:border-[#7D4A94] text-[#2D1B36]"
                                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={loading} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
                                    <input type="tel" required placeholder="+91 99999 99999" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D4A94]/20 focus:border-[#7D4A94] text-[#2D1B36]"
                                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} disabled={loading} />
                                </div>
                                <button type="submit" disabled={loading} className="w-full bg-[#2D1B36] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-2 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7D4A94] to-[#2D1B36] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {loading ? 'PROCESSING...' : 'UNLOCK VIDEO NOW'}
                                        {!loading && <ArrowRight className="w-5 h-5 text-[#D4AF37]" />}
                                    </span>
                                </button>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 mt-2">
                                    <Lock className="w-3 h-3" /> Your information is 100% secure.
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

