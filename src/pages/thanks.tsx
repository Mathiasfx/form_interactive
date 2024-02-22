import { DotBackground } from "../components/ui/dotBackground";
import Logo from "../assets/logopi.svg";
const Thanks = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col ">
      <DotBackground>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
          Gracias por sumarte, te esperamos en Datazón!
        </p>
      </DotBackground>
      <div className="absolute top-5 flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-60" />
      </div>
    </div>
  );
};

export default Thanks;
