import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper"; // <-- Import the new wrapper

const exo2 = Exo_2({ subsets: ["latin"], variable: '--font-exo2', weight: ['400', '700', '900'] });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

// Now you can safely export metadata from this Server Component
export const metadata: Metadata = {
  title: "Deep Tech Start-up Summit 2025",
  description: "Engineering the Future: Deep Tech for Viksit Bharath",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${inter.variable}`}>
        {/* The wrapper handles all client-side logic, including the preloader */}
        <AppWrapper>
            {children}
        </AppWrapper>
      </body>
    </html>
  );
}