import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-12 w-48", className)}>
      <Image
        src="/avs_logo_red.png"
        alt="AVS Associates Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
