import Image from "next/image";

const clients = [
  { src: "/lic_logo.svg", alt: "LIC Housing Finance Logo" },
  { src: "/protium_logo.svg", alt: "Protium Logo" },
  { src: "/mobicule_logo.svg", alt: "Mobicule Logo" },
  { src: "/au_logo.png", alt: "AU Small Finance Bank Logo" },
  { src: "/sbi_cards_logo.png", alt: "SBI Cards Logo" },
  { src: "/paytm_logo.svg", alt: "Paytm Logo" },
  { src: "/hsbc_logo.svg", alt: "HSBC Logo" },
  { src: "/idbi_logo.svg", alt: "IDBI Bank Logo" },
  { src: "/abfl_logo.jpeg", alt: "Aditya Birla Finance Logo" },
  { src: "/kotak_logo.svg", alt: "Kotak Mahindra Bank Logo" },
  { src: "/icici_logo.svg", alt: "ICICI Bank Logo" },
  { src: "/hdfc_logo.svg", alt: "HDFC Bank Logo" },
  { src: "/idfc_logo.svg", alt: "IDFC First Bank Logo" },
  { src: "/fullerton_logo.svg", alt: "Fullerton India Logo" },
  { src: "/bajaj_logo.svg", alt: "Bajaj Finserv Logo" },
];

export function Clients() {
  return (
    <section id="clients" className="w-full bg-card py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-destructive sm:text-5xl">
              Our Valued Clients
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to be associated with esteemed national and
              multinational banks and financial institutions in India.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {clients.map((client, index) => (
            <li key={index}>
              <Image src={client.src} alt={client.alt} width={158} height={48} className="object-contain" />
            </li>
          ))}
        </ul>
        <ul className="mb-8 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true">
          {clients.map((client, index) => (
            <li key={index}>
              <Image src={client.src} alt={client.alt} width={158} height={48} className="object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
