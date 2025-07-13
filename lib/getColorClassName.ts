export const getColorClassName = (hex: string) => {
  switch (hex) {
    case "#22c55e": return "text-green-600"; // green
    case "#facc15": return "text-yellow-500"; // yellow
    case "#ef4444": return "text-red-600";    // red
    default: return "text-gray-500";
  }
};