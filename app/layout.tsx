import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/footer";
import { WebVitals } from "@/components/web-vitals";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"]
});

export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: 'InsightEdge – Performance-Focused Blog Reader',
      template: '%s | InsightEdge',
    },
    description:
      'InsightEdge is a performance-focused blog reader built with Next.js App Router. Explore blazing-fast blog posts, real-time Web Vitals, and hands-on frontend optimization techniques.',
    keywords: [
      'InsightEdge',
      'Next.js App Router',
      'Web Performance',
      'Frontend Optimization',
      'Core Web Vitals',
      'LCP',
      'FID',
      'CLS',
      'React',
      'Blog Reader',
      'Developer Tools',
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!), // Replace with your actual domain
    openGraph: {
      title: 'InsightEdge – Performance-Focused Blog Reader',
      description:
        'Explore blazing-fast blog posts, real-time performance metrics, and hands-on optimization practices. Powered by Next.js App Router.',
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      siteName: 'InsightEdge',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'InsightEdge – Performance-Focused Blog Reader',
      description:
        'Real-time frontend performance metrics and fast blog reading experience. Practice Web Vitals optimization using InsightEdge.',
    },
    icons: {
      icon: '/favicon.ico',
    }
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.className} antialiased`}
      >
        <WebVitals />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <div className="w-full">
                <header>
                  <Navbar />
                </header>
                {children}
                <Toaster position="top-right" richColors />
                <Footer />
              </div>
            </SidebarProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
