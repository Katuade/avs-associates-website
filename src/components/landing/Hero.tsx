import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
      <Image
        src="/callcentre_agents.jpg"
        alt="A team of call center agents working"
        fill
        className="object-cover"
        priority
        data-ai-hint="call center team"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="max-w-3xl space-y-4">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:0.2s]">
            Elevating Customer Connections
          </h1>
          <p className="animate-fade-in-up text-lg text-white/80 md:text-xl [animation-delay:0.4s]">
            AVS Associates provides world-class call center services designed for
            trust and sophistication. Let us be the professional voice of your
            brand.
          </p>
        </div>
        <div className="animate-fade-in-up space-x-4 [animation-delay:0.6s]">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
