import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat (variable, with italics) is the one typeface across the site.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Hardware First Residency — Hyderabad, 1–6 November 2026",
  description:
    "Bring your build. Let's take it further. Six selected builders, six focused days of building hardware in Hyderabad with mentors, engineers and infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables scroll reveals before first paint, only when motion is welcome. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('hf-js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
