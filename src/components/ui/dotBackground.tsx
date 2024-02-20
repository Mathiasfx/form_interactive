import { ReactNode } from "react";

export function DotBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {children}
    </div>
  );
}
