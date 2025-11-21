import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="https://storage.googleapis.com/aiv-studio-assets/avs-logo-placeholder.png"
        alt="AVS Associates Logo"
        width={175}
        height={32}
        className="h-8 w-auto"
      />
    </div>
  );
}
