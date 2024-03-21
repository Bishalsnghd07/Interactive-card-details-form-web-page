import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive card details form",
  description: "A Challenge from Frontend Mentor!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link 
       rel="icon" 
       href="/images/favicon-32x32.png"
       type="image/png" 
       sizes="32x32" 
       />
      </head>
      <body className={`${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}
