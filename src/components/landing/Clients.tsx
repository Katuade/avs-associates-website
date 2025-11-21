const clientNames = [
  "Kotak Mahindra Bank",
  "HSBC Bank",
  "AU Small Finance Ltd",
  "ICICI Collection",
  "SBI Cards",
  "HDFC BANK",
  "HDFC",
  "IDFC",
  "PAYTM",
  "PROTIUM",
  "ABFL",
  "Fullerton India Ltd",
  "IDBI",
  "Mobicule",
  "LIC HSG Finance",
  "Bajaj",
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
              We are proud to be associated with esteemed national and
              multinational banks and financial institutions in India.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center justify-center gap-x-8 gap-y-4 font-semibold text-muted-foreground sm:grid-cols-3 md:grid-cols-4">
          {clientNames.map((client) => (
            <div
              key={client}
              className="flex justify-center text-center text-sm transition-all duration-300 ease-in-out hover:text-foreground"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
