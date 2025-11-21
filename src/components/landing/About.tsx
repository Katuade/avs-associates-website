import Image from "next/image";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="w-full bg-card">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <Card className="animate-fade-in-left overflow-hidden rounded-xl shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzYzNjkxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="A modern and bright office space with people working."
            width={800}
            height={600}
            className="aspect-video w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="modern office"
          />
        </Card>
        <div className="animate-fade-in-right space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-4xl md:text-5xl">
            About AVS Associates
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            AVS Associates was incorporated in January, 2009 with a view to
            create a niche in the Sales, recovery and collection industry with a
            prime focus to serve national / multinational / financial
            institution and other NBFC.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Proprietor Mr. Vikram Gadgil has behind him a vast experience of
            eleven years plus in different multinational banks like Standard
            Chartered Bank, Citi financial and HSBC and has worked closely on
            field for recovery, collection and repossession to name a few.
          </p>
        </div>
      </div>
    </section>
  );
}
