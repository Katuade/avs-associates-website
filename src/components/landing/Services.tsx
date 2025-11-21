import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Headset, MessageSquare, PhoneCall, Users2 } from "lucide-react";

const services = [
  {
    icon: <Headset className="h-8 w-8 text-primary" />,
    title: "Inbound Call Handling",
    description:
      "Professional, friendly agents to handle your customer queries, support requests, and order placements 24/7.",
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-primary" />,
    title: "Outbound Campaigns",
    description:
      "Targeted outbound calls for telemarketing, lead generation, customer surveys, and appointment setting.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Multi-Channel Support",
    description:
      "Seamless customer support across various channels including email, live chat, and social media.",
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: "Technical Support",
    description:
      "Tier 1 and Tier 2 technical support from trained experts to resolve product and service issues efficiently.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">
            Our Comprehensive Services
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a full suite of call center solutions tailored to meet the
            unique needs of your business.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
