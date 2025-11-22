import { Clock, ShieldCheck, TrendingUp, UserCheck, type LucideIcon } from "lucide-react";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Clock,
    title: "24/7/365 Operations",
    description:
      "Our inbound call center keeps your business open around the clock, ensuring no customer is left unanswered.",
  },
  {
    icon: UserCheck,
    title: "Professional CSRs",
    description:
      "Every call is handled by a trained, professional Customer Service Representative, acting as a seamless extension of your business.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Your Core Business",
    description:
      "Outsourcing allows you to invest more time, money, and resources into core activities that fuel your company's growth.",
  },
  {
    icon: ShieldCheck,
    title: "Specialized Credit Verification",
    description:
      "We provide key credit verification reports, using trained professionals and online models to crunch TAT and ensure sound lending decisions.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">
            Why Choose AVS Associates?
          </h2>
          <p className="animate-fade-in-up max-w-[900px] text-muted-foreground [animation-delay:0.2s] md:text-xl/relaxed">
            We are more than just a call center; we are your strategic partner
            in growth, customer retention, and accounts receivable management.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="animate-fade-in-up flex flex-col items-center text-center opacity-0"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <reason.icon className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
