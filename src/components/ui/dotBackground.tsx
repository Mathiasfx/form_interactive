import { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function DotBackground({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full  dark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right, rgba(228, 228, 231, 0.5) 1px, transparent 1px), linear-gradient(to_bottom, rgba(228, 228, 231, 0.5) 1px, transparent 1px)]",
          "dark:[background-image:linear-gradient(to_right, rgba(38, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(to_bottom, rgba(38, 38, 38, 0.5) 1px, transparent 1px)]"
        )}
      ></div>

      {children}
    </div>
  );
}
// className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
