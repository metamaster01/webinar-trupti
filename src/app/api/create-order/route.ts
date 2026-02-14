import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
    try {
        let body: unknown;
        try {
            body = await req.json();
        } catch (e) {
            console.error("Failed to parse request body:", e);
            return NextResponse.json(
                { success: false, message: "Invalid JSON in request body" },
                { status: 400 }
            );
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { name, email, phone, ...utm } = body as { name?: string; email?: string; phone?: string;[key: string]: any };

        console.log("Order request received for:", { name, email, phone });

        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: "Missing required fields: name, email, or phone" },
                { status: 400 }
            );
        }

        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            console.error("Razorpay keys are missing in environment variables");
            return NextResponse.json(
                { success: false, message: "Server configuration error: Razorpay keys missing" },
                { status: 500 }
            );
        }

        let razorpay;
        try {
            razorpay = new Razorpay({
                key_id: key_id,
                key_secret: key_secret,
            });
        } catch (initErr: unknown) {
            console.error("Failed to initialize Razorpay SDK:", initErr);
            const message = initErr instanceof Error ? initErr.message : "Initialization failed";
            return NextResponse.json(
                { success: false, message: "Failed to initialize payment gateway: " + message },
                { status: 500 }
            );
        }

        // Create Razorpay Order
        const amountInINR = 99;
        try {
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

            console.log("Razorpay order created successfully:", order.id);

            return NextResponse.json({
                success: true,
                order_id: order.id,
                key_id: key_id,
            });
        } catch (rzpError: unknown) {
            console.error("Razorpay Order Creation Error Full Object:", rzpError);

            // Extract the most useful error message from Razorpay's response
            let message = "Unknown Razorpay Error";
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const err = rzpError as any;
            if (err.error && err.error.description) {
                message = err.error.description;
            } else if (err.description) {
                message = err.description;
            } else if (err.message) {
                message = err.message;
            } else if (typeof rzpError === 'string') {
                message = rzpError;
            } else {
                message = JSON.stringify(rzpError);
            }

            return NextResponse.json(
                { success: false, message: "Razorpay Error: " + message },
                { status: 500 }
            );
        }
    } catch (error: unknown) {
        console.error("Global Order API Error:", error);
        const message = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json(
            { success: false, message: message },
            { status: 500 }
        );
    }
}
