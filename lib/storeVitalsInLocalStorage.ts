import { NextWebVitalsMetric } from "next/app";

export function storeWebVital(metric: NextWebVitalsMetric) {
    const key = `web-vital-${metric.name}`;
    localStorage.setItem(key, JSON.stringify(metric));
}