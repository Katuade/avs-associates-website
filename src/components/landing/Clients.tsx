import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Clients() {
  const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-logo-'));

  return (
    <section id="clients" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">Our Valued Clients</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to partner with a diverse range of businesses, from innovative startups to established industry leaders.
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
