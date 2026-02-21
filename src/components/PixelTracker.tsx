'use client';

import { useEffect } from 'react';

interface PixelTrackerProps {
    eventName: 'PageView' | 'Lead' | 'Purchase' | string;
    eventData?: object;
}

export default function PixelTracker({ eventName, eventData }: PixelTrackerProps) {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', eventName, eventData);
        }
    }, [eventName, eventData]);

    return null;
}
