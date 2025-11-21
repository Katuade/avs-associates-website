import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Clients } from "@/components/landing/Clients";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 animate-fade-in">
        <Hero />
        <About />
        <Services />
        <Infrastructure />
        <WhyChooseUs />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
