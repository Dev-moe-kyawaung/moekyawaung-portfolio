import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AppCollection from "@/components/AppCollection";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <AppCollection />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
