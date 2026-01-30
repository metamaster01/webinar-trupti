"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface CtaPaymentModalProps {
    trigger?: ReactNode;
    buttonClassName?: string;
    buttonText?: string;
}

export default function CtaPaymentModal({ trigger, buttonClassName, buttonText = "Join Workshop @ ₹99" }: CtaPaymentModalProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [utm, setUtm] = useState<any>({});

    useEffect(() => {
        setMounted(true);
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

        const data: any = {};
        keys.forEach((k) => {
            const v = params.get(k);
            if (v) data[k] = v;
        });

        setUtm(data);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    const startPayment = async () => {
        if (!form.name || !form.email || !/^\d{10}$/.test(form.phone)) {
            alert("Please enter valid details (10-digit phone number is required)");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, ...utm }),
            });

            if (!res.ok) {
                throw new Error(`Server responded with ${res.status}`);
            }

            const data = await res.json();

            if (!data.success) {
                alert("Payment initialization failed: " + (data.message || "Unknown error"));
                setLoading(false);
                return;
            }

            const options = {
                key: data.key_id,
                order_id: data.order_id,
                amount: 9900,
                currency: "INR",
                name: "Workshop",
                description: "Workshop Registration",
                image: "https://www.truptiwarjurkar.com/logo-2.png",
                prefill: {
                    name: form.name,
                    email: form.email,
                    contact: form.phone,
                },
                notes: {
                    ...utm,
                    customer_name: form.name,
                    customer_email: form.email,
                    customer_phone: form.phone,
                },
                handler: function (response: any) {
                    window.location.href = "/thank-you";
                },
                modal: {
                    ondismiss: () => {
                        setLoading(false);
                    },
                },
                theme: {
                    color: "#7D4A94",
                },
            };

            // @ts-ignore
            const Razorpay = window.Razorpay;

            if (Razorpay) {
                const rzp = new Razorpay(options);
                rzp.open();
            } else {
                alert("Payment gateway (Razorpay) is not ready yet. Please wait 2 seconds and try again.");
                setLoading(false);
            }
        } catch (err: any) {
            console.error("Payment Error:", err);
            alert("Error: " + (err.message || "Something went wrong while opening the checkout."));
            setLoading(false);
        }
    };

    const modalContent = (
        <div
            className="fixed inset-0 flex items-center justify-center px-4 py-6 z-[9999999] overflow-y-auto outline-none focus:outline-none"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}
        >
            {/* Overlay click to close */}
            <div className="fixed inset-0 -z-1" onClick={() => !loading && setOpen(false)}></div>

            <div className="relative bg-white w-full max-w-md mx-auto rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={() => !loading && setOpen(false)}
                    className="absolute top-4 right-5 text-gray-400 hover:text-gray-800 transition-colors text-3xl z-10 p-2"
                >
                    ×
                </button>

                <div className="p-8 sm:p-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-[#2D1B36] mb-3 tracking-tight">
                            Secure Your Seat
                        </h2>
                        <div className="inline-block bg-[#7D4A94]/5 px-6 py-2 rounded-full border border-[#7D4A94]/10">
                            <p className="text-[#7D4A94] font-bold text-xl">Join @ ₹99 Only</p>
                        </div>
                    </div>

                    <div className="space-y-6 text-left">
                        <div>
                            <label className="block text-[10px] font-bold text-[#7D4A94] uppercase tracking-[0.2em] mb-2 ml-1">Full Name</label>
                            <input
                                placeholder="e.g. Rahul Sharma"
                                className="w-full p-4 border-2 border-gray-100 bg-[#FAFAFA] rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#7D4A94]/5 focus:border-[#7D4A94] outline-none transition-all text-[#2D1B36] font-medium text-lg placeholder:text-gray-300"
                                disabled={loading}
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-[#7D4A94] uppercase tracking-[0.2em] mb-2 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full p-4 border-2 border-gray-100 bg-[#FAFAFA] rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#7D4A94]/5 focus:border-[#7D4A94] outline-none transition-all text-[#2D1B36] font-medium text-lg placeholder:text-gray-300"
                                disabled={loading}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-[#7D4A94] uppercase tracking-[0.2em] mb-2 ml-1">Phone Number</label>
                            <div className="relative group">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold border-r border-gray-200 pr-4">+91</span>
                                <input
                                    placeholder="9876543210"
                                    className="w-full p-4 pl-20 border-2 border-gray-100 bg-[#FAFAFA] rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#7D4A94]/5 focus:border-[#7D4A94] outline-none transition-all text-[#2D1B36] font-medium text-lg placeholder:text-gray-300"
                                    disabled={loading}
                                    maxLength={10}
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startPayment}
                        disabled={loading}
                        className={`w-full mt-10 py-5 rounded-full text-[#2D1B36] font-bold text-xl shadow-lg transition-all transform active:scale-[0.98] relative overflow-hidden group ${loading ? "bg-gray-100 cursor-not-allowed" : "bg-[#FACC15] hover:scale-[1.02] hover:shadow-xl"
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-[#2D1B36]" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                PROCESSING...
                            </span>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative">PAY ₹99 SECURELY</span>
                            </>
                        )}
                    </button>

                    <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-50 pt-8">
                        <div className="flex items-center gap-4 opacity-50">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-4" />
                            <div className="h-4 w-[1px] bg-gray-300"></div>
                            <div className="flex items-center gap-1.5 font-bold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[10px] tracking-widest uppercase">SSL SECURED</p>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium text-center">Your data is safe and will be processed securely via Razorpay.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
                {trigger ? trigger : (
                    <button className={buttonClassName || "px-8 py-4 bg-[#FF4D00] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"}>
                        {buttonText}
                    </button>
                )}
            </div>

            {open && mounted && createPortal(modalContent, document.body)}
        </>
    );
}
