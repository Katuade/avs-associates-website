import Image from "next/image";

const clientLogos = [
  {
    id: "client-logo-1",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
  {
    id: "client-logo-2",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1619551734325-81aaf323686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
  {
    id: "client-logo-3",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1619551734325-81aaf323686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
  {
    id: "client-logo-4",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
  {
    id: "client-logo-5",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
  {
    id: "client-logo-6",
    description: "Placeholder for a client logo.",
    imageUrl:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjM2Nzc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company logo",
  },
];

export function Clients() {
  return (
    <section id="clients" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">
              Our Valued Clients
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to partner with a diverse range of businesses, from
              innovative startups to established industry leaders.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="flex justify-center">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={150}
                height={150}
                className="aspect-square object-contain transition-all duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
