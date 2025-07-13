export const getBarColor = (name: string, value: number) => {
    switch (name) {
        case 'LCP':
            return value <= 2500 ? "#22c55e" : (
                value <= 4000 ? "#facc15" : "#ef4444"
            );

        case 'FID':
            return value <= 100 ? "#22c55e" : (
                value <= 300 ? "#facc15" : "#ef4444"
            );

        case 'CLS':
            return value <= 0.1 ? "#22c55e" : (
                value <= 0.25 ? "#facc15" : "#ef4444"
            );

        default:
            return "#22c55e";
    }
};