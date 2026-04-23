import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import LenisProvider from "@/providers/LenisProvider";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono-local",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "SwiftMove® — Moving Experiences, Not Just Packages",
  description:
    "Next-generation packers and movers. Premium relocation services with real-time tracking, AI-powered estimates, and white-glove care. Book your move today.",
  keywords: "packers and movers, relocation, moving company, home shifting, office relocation, vehicle transport",
  openGraph: {
    title: "SwiftMove® — Moving Experiences, Not Just Packages",
    description: "Next-generation packers and movers with premium service.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
