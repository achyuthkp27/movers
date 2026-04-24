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
  title: "Packers and Movers in Karnataka | Basaveshwara Packers & Movers",
  description:
    "Looking for reliable packers and movers in Karnataka? Basaveshwara Packers & Movers offers safe house shifting, packing, loading & transportation services all over Karnataka.",
  keywords: "packers and movers in bangalore, packers and movers in doddaballapur, house shifting services in bangalore, local packers and movers near me, affordable packers and movers karnataka, domestic shifting services karnataka, household goods shifting services",
  robots: "index, follow",
  openGraph: {
    title: "Packers and Movers in Karnataka | Basaveshwara Packers & Movers",
    description: "Reliable house shifting, packing, loading, and unloading services in Bangalore and all over Karnataka.",
    type: "website",
    url: "https://basaveshwarapackers.in",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packers and Movers in Bangalore | Basaveshwara Packers & Movers",
    description: "Reliable house shifting, packing, loading, and unloading services in Bangalore and all over Karnataka.",
  },
  alternates: {
    canonical: "https://basaveshwarapackers.in",
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
