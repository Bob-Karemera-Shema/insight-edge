import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
    return {
        title: 'About',
        description: 'Learn more about InsightEdge — a performance-focused blog reader built with Next.js App Router. Explore features, goals, and technologies that help developers master frontend performance.',
    };
};

export default function About() {
    return (
        <main className="max-w-5xl mx-auto p-4 lg:px-0 space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl">
                    About Insight<span className="font-bold">Edge</span>
                </h1>
                <p>
                    Welcome to InsightEdge, your go-to playground for mastering and observing real‐world frontend performance in action. Built with the power and flexibility of Next.js App Router, InsightEdge delivers a fast, intuitive reading experience while equipping you with the tools to measure, analyze, and improve core web vitals.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl">Our Mission</h2>
                <p>
                    At InsightEdge, we believe that great content deserves a lightning‐fast delivery and that every developer should have hands‐on access to the metrics that define a truly performant web experience. Our mission is twofold:
                </p>
                <div className="pl-4 space-x-4">
                    <p>1. Empower readers to enjoy seamless, minimal‐latency access to high-quality blog posts.</p>
                    <p>2. Empower developers to see, practice, and internalize modern optimization techniques, right alongside the content they love.</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl">Key Features</h2>
                <p>
                    <span className="block font-semibold">Blazing-Fast Navigation</span>
                    Leveraging Next.js App Router’s server-side rendering and intelligent caching strategies, InsightEdge ensures near-instant page loads, even on slower connections.
                </p>
                <p>
                    <span className="block font-semibold">Live Performance Metrics</span>
                    A performance dashboard showcasing metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS), so you can see optimization in real time.
                </p>
                <p>
                    <span className="block font-semibold">Hands-On Learning</span>
                    Interactive code snippets and “how-to” mini-labs walk you through implementing performance best practices, everything from image optimization and code splitting to prefetching and caching.
                </p>
                <p>
                    <span className="block font-semibold">Clean, Responsive Design</span>
                    Our interface scales flawlessly across devices and screen sizes, ensuring an optimal reading and learning experience whether you’re on desktop, tablet, or mobile.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl">Who Should Use InsightEdge?</h2>
                <div className="pl-4 space-x-4">
                    <p>- Frontend Developers eager to deepen their understanding of web performance and adopt industry-leading practices.</p>
                    <p>- Tech Enthusiasts & Learners looking for a hands-on environment to experiment with modern optimization techniques.</p>
                    <p>- Content Creators & Bloggers wanting to ensure their sites deliver content as quickly and smoothly as possible.</p>
                </div>
            </section>
        </main>
    )
}