import { cn } from "@/lib/utils";
import Image from "next/image";

export function BigLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-16 w-64", className)}>
      <Image
        src="/avs_logo.png"
        alt="AVS Associates Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
