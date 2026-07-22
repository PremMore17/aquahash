import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaHash",
  description: "AI-Powered Groundwater Intelligence & Sustainable Water Recommendation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#020617] text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}