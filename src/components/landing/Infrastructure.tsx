import Image from "next/image";
import {
  Building,
  Computer,
  Network,
  Server,
  Users,
  Wind,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "2200+ sq.ft. Office Space",
    description: "Modern, cheerful, and bright interiors.",
  },
  {
    icon: <Computer className="h-8 w-8 text-primary" />,
    title: "85+ Networked Workstations",
    description: "Fully equipped for call center operations.",
  },
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: "High-Speed Leased Lines",
    description: "Optic and wireless for uninterrupted connectivity.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "High-End Xenon Servers",
    description: "With RAID technology and redundancy at every point.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "200+ Trained Professionals",
    description: "Including 80 Telecallers and 125 Field Executives.",
  },
  {
    icon: <Wind className="h-8 w-8 text-primary" />,
    title: "Modern Facilities",
    description:
      "Fully air-conditioned, with conference rooms and cafeteria.",
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="w-full bg-card">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-4xl md:text-5xl">
              Robust Infrastructure
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our state-of-the-art facilities are designed for efficiency,
              scalability, and providing a seamless service experience. We are
              geographically spread across the western region to ensure
              systematic coverage.
            </p>
          </div>
          <Card className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/callcentre_girl.jpg"
              alt="Call center agents"
              width={800}
              height={700}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="call center"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-in-up flex flex-col items-center text-center opacity-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
