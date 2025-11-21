import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  CheckCircle,
  Phone,
  Database,
  FileCheck,
  Headset,
  Users,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Customer Care",
    icon: <Headset className="h-8 w-8 text-accent" />,
    items: [
      "Inbound and outbound calls",
      "Payment reminders",
      "Lead generation and fulfillment",
      "Customer retention & win-back",
      "Cross and up-selling",
      "Welcome and reminder calls",
    ],
  },
  {
    title: "Collection & Recovery",
    icon: <Phone className="h-8 w-8 text-accent" />,
    items: [
      "Soft bucket collection calls",
      "Proactive reminder calls",
      "Tele-collection for financial products",
      "Post-due-date (PDD) collections",
      "Dunning services",
      "Skip tracing and validation",
    ],
  },
  {
    title: "Verification Services",
    icon: <FileCheck className="h-8 w-8 text-accent" />,
    items: [
      "Residence and business verification",
      "Telephone and document verification",
      "Physical customer profiling",
      "Negative database verification",
      "Credit verification reports",
    ],
  },
  {
    title: "Support & BPO",
    icon: <Users className="h-8 w-8 text-accent" />,
    items: [
      "End-to-end business process solutions",
      "Customer relationship management",
      "Data entry and billing solutions",
      "Custom workstation and resource provisioning",
      "Staggered & night process calling",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">
            Our Comprehensive Services
          </h2>
          <p className="animate-fade-in-up max-w-[900px] text-muted-foreground [animation-delay:0.2s] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a full suite of call center and BPO solutions designed to
            integrate seamlessly with your operations and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, index) => (
            <Card
              key={category.title}
              className="animate-fade-in-up flex flex-col opacity-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CardHeader className="items-center text-center">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
