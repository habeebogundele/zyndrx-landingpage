import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Pricing />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
