import Hero from "@/components/hero/Hero";
import SiteNav from "@/components/hero/SiteNav";
import Bring from "@/components/sections/Bring";
import { Apply, SiteFooter } from "@/components/sections/Closing";
import Faqs from "@/components/sections/Faqs";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Partners from "@/components/sections/Partners";
import RevealObserver from "@/components/sections/RevealObserver";
import Support from "@/components/sections/Support";
import Toolkit from "@/components/sections/Toolkit";
import "@/components/sections/sections.css";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Experience />
        <Toolkit />
        <Bring />
        <Gallery />
        <Partners />
        <Support />
        <Faqs />
        <Apply />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
