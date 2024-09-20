import { ReactNode } from "react";

export function DotBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-[50rem] w-full dark:bg-violet-700 bg-violet-700  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
      {children}
    </div>
  );
}
