export const VITAL_THRESHOLDS = {
    LCP: 2500, // ms (Good < 2500ms)
    FID: 100,  // ms (Good < 100ms)
    CLS: 0.1,  // unitless (Good < 0.1)
};

export const getRecommendation = (name: string, value: number): string | null => {
    switch (name) {
        case "LCP":
            return value > VITAL_THRESHOLDS.LCP
                ? "Consider optimizing image loading, lazy-loading offscreen content, or reducing render-blocking resources."
                : null;
        case "FID":
            return value > VITAL_THRESHOLDS.FID
                ? "Reduce heavy JavaScript execution, defer non-critical scripts, and minimize main-thread blocking."
                : null;
        case "CLS":
            return value > VITAL_THRESHOLDS.CLS
                ? "Avoid layout shifts by reserving space for images, ads, and dynamic content. Use `font-display: swap`."
                : null;
        default:
            return null;
    }
};