import localFont from "next/font/local";
import "./globals.css";

// Clash Display and General Sans by Indian Type Foundry (Fontshare, ITF Free Font License).
const clashDisplay = localFont({
  variable: "--font-clash",
  src: [
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const generalSans = localFont({
  variable: "--font-general",
  src: [
    { path: "../fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
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
      className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
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
