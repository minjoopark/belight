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
  description: "정의를 실현하는 든든한 법률 파트너 - 형사변호, 민사소송, 기업법무, 가사소송 전문 법률사무소",
  keywords: "법률사무소광화, 광화문변호사, 종로변호사, 형사변호, 민사소송, 보험소송",
  authors: [{ name: "법률사무소 광화" }],
  openGraph: {
    title: "법률사무소 광화",
    description: "정의를 실현하는 든든한 법률 파트너",
    url: "https://lawbelight.com",
    siteName: "법률사무소 광화",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
