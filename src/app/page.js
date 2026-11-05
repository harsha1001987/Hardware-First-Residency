import Hero from "@/components/hero/Hero";
import SiteNav from "@/components/hero/SiteNav";
import Bring from "@/components/sections/Bring";
import { Apply, SiteFooter } from "@/components/sections/Closing";
import Faqs from "@/components/sections/Faqs";
import Gallery from "@/components/sections/Gallery";
import Mentors from "@/components/sections/Mentors";
import Partners from "@/components/sections/Partners";
import RevealObserver from "@/components/sections/RevealObserver";
import Support from "@/components/sections/Support";
import Tape from "@/components/sections/Tape";
import Toolkit from "@/components/sections/Toolkit";
import "@/components/sections/sections.css";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Tape tone="yellow" tilt={-1.4} />
        <Partners />
        <Toolkit />
        <Mentors />
        <Bring />
        <Gallery />
        <Support />
        <Faqs />
        <Tape tilt={1.4} />
        <Apply />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
