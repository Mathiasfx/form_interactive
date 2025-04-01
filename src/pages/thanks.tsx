import { DotBackground } from "../components/ui/dotBackground";
import Logo from "../assets/logopi.svg";
import logoDatazon from "../assets/datazonlogo.svg";
import Mundo from "../assets/mundoBlanco.svg";

const Thanks = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col relative ">
      <DotBackground>
        <img src={Mundo} alt="Mundo" className="w-60 absolute top-10" />
        <p className="text-4xl dark:text-white text-stone-200 sm:text-5xl font-bold relative z-20 py-8 text-center">
          Gracias por sumarte, te esperamos en{" "}
          <img
            src={logoDatazon}
            alt="datazon"
            className="inline-block align-middle z-10"
            width={200}
          />
          !
        </p>
        <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center h-20">
          <img src={Logo} alt="Logo" className="w-60" />
        </div>
      </DotBackground>
    </div>
  );
};

export default Thanks;
