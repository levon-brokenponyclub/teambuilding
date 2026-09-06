import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/poppins-latin-800-italic.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beach & Bush Team Building",
  description: "South Africa's leading team building experiences. 25+ years expertise, 500+ venues nationwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <QuoteModalWrapper />
        <VideoModalWrapper />
        <SpeedInsights />
      </body>
    </html>
  );
}
