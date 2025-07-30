import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Mensura | AI powered app for your daily calories intake and nutrition tracking",
  description:
    "Mensura is a ai powered app for your daily calories intake and nutrition tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
