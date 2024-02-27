import { DotBackground } from "../components/ui/dotBackground";
import Logo from "../assets/logopi.svg";
const Thanks = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col relative ">
      <DotBackground>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
          Gracias por sumarte, te esperamos en{" "}
          <span className="text-yellow-500 dark:text-yellow-500 font-opensans-extrabold">
            Datazón
          </span>
          !
        </p>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center h-20">
          <img src={Logo} alt="Logo" className="w-60" />
        </div>
      </DotBackground>
    </div>
  );
};

export default Thanks;
