"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#why-us", label: "Why Us" },
  { href: "#clients", label: "Our Clients" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <Logo />
        </Link>
        <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-foreground/60 transition-colors hover:text-foreground/80"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="mb-4 flex items-center gap-2"
                  prefetch={false}
                >
                  <Logo />
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
