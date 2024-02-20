import { DotBackground } from "../components/ui/dotBackground";
const Thanks = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <DotBackground>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Te esperamos!
        </p>
      </DotBackground>
    </div>
  );
};

export default Thanks;
