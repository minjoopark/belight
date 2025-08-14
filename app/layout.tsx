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
  title: "법률사무소 광화 | Gwanghwa Law Office",
  description: "고객의 문제를 해결하고 가치를 더합니다 - 보험소송, 의료소송, 기업법무 전문 법률사무소",
  keywords: "법률사무소광화, 광화문변호사, 종로변호사, 형사변호, 민사소송, 보험소송",
  authors: [{ name: "법률사무소 광화" }],
  openGraph: {
    title: "법률사무소 광화 | Gwanghwa Law Office",
    description: "고객의 문제를 해결하고 가치를 더합니다 - 보험소송 및 기업법무 전문",
    url: "https://lawbelight.com",
    siteName: "법률사무소 광화",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: 'https://lawbelight.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '법률사무소 광화',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "법률사무소 광화",
    description: "고객의 문제를 해결하고 가치를 더합니다",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
