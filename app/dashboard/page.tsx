'use client';
import { WebVital } from "@/lib/types";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getBarColor } from "@/lib/getBarColor";
import { getRecommendation, VITAL_THRESHOLDS } from "@/lib/getRecommendation";
import { getColorClassName } from "@/lib/getColorClassName";


export default function Dashboard() {
    const [vitals, setVitals] = useState<WebVital[]>([]);

    useEffect(() => {
        const metricNames: string[] = ["LCP", "FID", "CLS"];
        const storedVitals: WebVital[] = [];

        metricNames.forEach((name) => {
            const raw = localStorage.getItem(`web-vital-${name}`);
            if (raw) {
                try {
                    const parsed = JSON.parse(raw) as WebVital;
                    storedVitals.push(parsed);
                } catch {
                    // Skip bad data
                }
            }
        });

        setVitals(storedVitals);
    }, [])

    const combinedData = vitals.map((vital) => ({
        name: vital.name,
        actual: Number(vital.value.toFixed(2)),
        threshold: VITAL_THRESHOLDS[vital.name as keyof typeof VITAL_THRESHOLDS],
    }));

    return (
        <main className="max-w-5xl w-full min-h-[40vh] mx-auto px-4 lg:px-0">
            <h1 className="text-2xl font-bold mb-6">Web Vitals</h1>
            {vitals.length === 0 ? (
                <p className="text-gray-500">
                    No Web Vitals data yet. Interact with the app and reload to collect LCP, FID, and CLS metrics.
                </p>
            ) : (
                <>
                    {/* Individual metrics */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {vitals.map((vital) => {
                            const chartData = [
                                {
                                    name: vital.name,
                                    actual: Number(vital.value.toFixed(2)),
                                    threshold: VITAL_THRESHOLDS[vital.name as keyof typeof VITAL_THRESHOLDS],
                                },
                            ];
                            const recommendation = getRecommendation(vital.name, vital.value);

                            return (
                                <Card key={vital.name} className="border-border-color border-[1px] bg-container-light-gray">
                                    <CardHeader>
                                        <CardTitle className="text-xl flex justify-between">
                                            <span>{vital.name}</span>
                                            <span className={getColorClassName(getBarColor(vital.name, vital.value))}>
                                                {vital.value.toFixed(2)}
                                            </span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={200}>
                                            <BarChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend wrapperStyle={{ fontSize: "12px" }} />
                                                <Bar
                                                    dataKey="actual"
                                                    name="Measured"
                                                    fill={getBarColor(vital.name, vital.value)}
                                                />
                                                <Bar
                                                    dataKey="threshold"
                                                    name="Good"
                                                    fill="oklch(0.6 0.118 184.704)"
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>

                                        {recommendation && (
                                            <div className="mt-4 text-sm text-foreground-color border-l-4 border-custom-blue pl-3 bg-custom-blue/5 rounded flex p-2">
                                                <div>
                                                    <strong className="block">Recommendation:</strong>
                                                    {recommendation}
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </section>

                    {/* Combined metrics */}
                    <section className="mt-12">
                        <Card className="border-border-color bg-container-light-gray">
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart
                                        data={combinedData}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                        barCategoryGap="30%"
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend wrapperStyle={{ fontSize: "12px" }} />
                                        <Bar
                                            dataKey="actual"
                                            name="Measured"
                                            fill="#4b6bfb"
                                            label={{ position: "top", formatter: (v: number) => v.toFixed(2) }}
                                        />
                                        <Bar
                                            dataKey="threshold"
                                            name="Good"
                                            fill="oklch(0.6 0.118 184.704)"
                                            label={{ position: "top", formatter: (v: number) => v.toFixed(2) }}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </section>
                </>
            )}
        </main>
    );
}