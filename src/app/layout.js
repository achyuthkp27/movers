import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import StructuredData from "@/components/StructuredData";
import PageTransition from "@/providers/PageTransition";
import ClientGlobals from "@/components/ClientGlobals";

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
  robots: "index, follow",
  openGraph: {
    title: "SwiftMove® — Moving Experiences, Not Just Packages",
    description: "Next-generation packers and movers with premium service.",
    type: "website",
    url: "https://swiftmove.local",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftMove® — Premium Moving Services",
    description: "Real-time tracking, AI estimates, white-glove care.",
  },
  alternates: {
    canonical: "https://swiftmove.local",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider>
          <ClientGlobals>
            <LenisProvider>
              <PageTransition>
                {children}
              </PageTransition>
            </LenisProvider>
          </ClientGlobals>
        </ThemeProvider>
      </body>
    </html>
  );
}
