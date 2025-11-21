import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="w-full bg-primary/5">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 py-24 text-center md:px-6 md:py-32">
        <div className="max-w-3xl space-y-4">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:0.2s]">
            Elevating Customer Connections
          </h1>
          <p className="animate-fade-in-up text-lg text-muted-foreground md:text-xl [animation-delay:0.4s]">
            AVS Associates provides world-class call center services designed for
            trust and sophistication. Let us be the professional voice of your
            brand.
          </p>
        </div>
        <div className="animate-fade-in-up space-x-4 [animation-delay:0.6s]">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
