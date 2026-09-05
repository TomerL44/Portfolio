import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutBento } from "@/components/sections/about-bento";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Terminal } from "@/components/sections/terminal";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

/**
 * Home — Main page composing all portfolio sections.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Projects />
        <Timeline />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
