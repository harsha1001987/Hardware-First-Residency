import Hero from "@/components/hero/Hero";
import SiteNav from "@/components/hero/SiteNav";
import Bring from "@/components/sections/Bring";
import Cohort from "@/components/sections/Cohort";
import { Apply, SiteFooter } from "@/components/sections/Closing";
import Faqs from "@/components/sections/Faqs";
import Mentors from "@/components/sections/Mentors";
import Partners from "@/components/sections/Partners";
import RevealObserver from "@/components/sections/RevealObserver";
import Toolkit from "@/components/sections/Toolkit";
import "@/components/sections/sections.css";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Toolkit />
        <Cohort />
        <Mentors />
        <Partners />
        <Bring />
        <Faqs />
        <Apply />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
