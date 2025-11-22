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
          Founded in January 2009, AVS Associates is a trusted provider of contact-center
           and business support services for leading banks, NBFCs, and corporates across 
           India. We specialize in delivering seamless inbound and outbound communication 
           solutions that enhance customer experience and strengthen business performance.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Under the leadership of Mr. Vikram Gadgil, who brings over a decade of experience
           from multinational banks such as Standard Chartered, CitiFinancial, and HSBC,
            AVS Associates has grown into a reliable partner known for professionalism,
             efficiency, and service quality.
          </p>
        </div>
      </div>
    </section>
  );
}
