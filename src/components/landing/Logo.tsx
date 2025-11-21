import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-48", className)}>
      <Image
        src="https://storage.googleapis.com/aiv-studio-assets/avs-logo.png"
        alt="AVS Associates Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
