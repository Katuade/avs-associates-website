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
            Founded on the principle of exceptional service, AVS Associates has
            grown into a leading provider of comprehensive call center
            solutions. Our mission is to empower businesses by managing their
            customer interactions with professionalism and efficiency, allowing
            them to focus on their core operations.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our team is our greatest asset. Comprised of experienced, highly-trained
            professionals, we are dedicated to representing your brand with the
            same passion and commitment as you would.
          </p>
        </div>
      </div>
    </section>
  );
}
