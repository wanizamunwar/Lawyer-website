import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import About from "@/components/About";
import Practice from "@/components/Practice";
import Process from "@/components/Process";
import Record from "@/components/Record";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Credentials />
        <About />
        <Practice />
        <Process />
        <Record />
        <Contact />
        <ScrollAnimations />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
