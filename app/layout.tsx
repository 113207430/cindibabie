import type { Metadata } from "next";
import { Geist, Geist_Mono, BIZ_UDMincho } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bizMincho = BIZ_UDMincho({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mincho' });

export const metadata: Metadata = {
  title: "陳歆穎的個人履歷",
  description: "陳歆穎的個人履歷",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} ${bizMincho.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 h-full overflow-x-auto">
            <div style={{ minWidth: '900px', width: '100%', height: '100%' }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}