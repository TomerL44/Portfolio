import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomer Levy — Software Engineer & Student",
  description:
    "Personal portfolio of Tomer Levy — Software Engineering student at Braude Academic College with solid foundations in C++, Java, Python, client-server architectures, and agentic AI.",
  openGraph: {
    title: "Tomer Levy — Software Engineer & Student",
    description:
      "Software Engineering student experienced in C++, Java, Python, and AI systems. Building robust software from low-level emulators to autonomous agents.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#09090b] text-white">{children}</body>
    </html>
  );
}
