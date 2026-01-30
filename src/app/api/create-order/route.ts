import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, ...utm } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create Razorpay Order with leads data in notes
        // This allows webhooks (like Pabbly) to intercept all data upon success
        const amountInINR = 99;
        const order = await razorpay.orders.create({
            amount: amountInINR * 100, // in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                customer_name: name,
                customer_email: email,
                customer_phone: phone,
                utm_source: utm.utm_source || "",
                utm_medium: utm.utm_medium || "",
                utm_campaign: utm.utm_campaign || "",
                utm_content: utm.utm_content || "",
                utm_term: utm.utm_term || "",
                gclid: utm.gclid || "",
                fclid: utm.fclid || "",
            },
        });

        return NextResponse.json({
            success: true,
            order_id: order.id,
            key_id: process.env.RAZORPAY_KEY_ID,
        });
    } catch (error: any) {
        console.error("Order creation failed:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
