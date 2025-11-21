import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BigLogo } from "./BigLogo";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BigLogo />
          </Link>
          <p className="max-w-xs text-sm text-primary-foreground/80">
            We trust you would give us an opportunity to offer our quality
            service to your esteemed organization and appoint us as your support
            agency to enhance your business. It will be an honor to work with
            you and perform to your fullest satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:col-span-2 md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold">Address</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              123 Business Rd, Suite 100
              <br />
              Commerce City, ST 54321
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold">Phone</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">(123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              contact@avsassociates.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 text-center md:flex-row md:justify-between md:px-6">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} AVS Associates. All rights reserved.
          </p>
          <p className="max-w-md text-xs text-primary-foreground/60">
            In case of any further queries please feel free to contact the
            undersigned for more information.
          </p>
        </div>
      </div>
    </footer>
  );
}
