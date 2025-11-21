import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 py-24 text-center md:px-6 md:py-32">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Elevating Customer Connections
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            AVS Associates provides world-class call center services designed for
            trust and sophistication. Let us be the professional voice of your
            brand.
          </p>
        </div>
        <div className="space-x-4">
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
