import Image from "next/image";
import {
  Building,
  Computer,
  Network,
  Server,
  Users,
  Wind,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-4xl md:text-5xl">
                Robust Infrastructure
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our state-of-the-art facilities are designed for efficiency,
                scalability, and providing a seamless service experience. We are
                geographically spread across the western region to ensure systematic coverage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-full bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-md font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Card className="hidden overflow-hidden rounded-xl shadow-lg lg:block">
            <Image
              src="https://images.unsplash.com/photo-1587691592099-4083681565e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYWxsJTIwY2VudGVyfGVufDB8fHx8MTc2Mzc3OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Call center agents working at their desks"
              width={800}
              height={700}
              className="h-full w-full object-cover"
              data-ai-hint="call center"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
