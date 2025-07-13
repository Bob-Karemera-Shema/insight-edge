'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
    useReportWebVitals((metric) => {
        const allowedMetrics = ['LCP', 'FID', 'CLS'];

        if (allowedMetrics.includes(metric.name)) {
            // console.log(`[Web Vital] ${metric.name}: `, metric.value);
            console.log(metric);
            import("@/lib/storeVitalsInLocalStorage").then((mod) => {
                mod.storeWebVital(metric);
            });
        }
    });

    return null;
}