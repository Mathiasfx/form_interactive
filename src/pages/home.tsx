import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { wordHome } from "../utils/texts";
import Logo from "../assets/logopi.svg";
import Datazon from "../assets/datazonlogo.svg";
import Mundo from "../assets/mundo.svg";
import { BackgroundBeams } from "../components/ui/dinamicBackground";

const home = () => {
  return (
    <>
      <div className="w-full min-h-screen relative flex flex-col items-center justify-center flex-1 antialiased  bg-neutral-950 ">
        <img src={Mundo} alt="mundo datazon" className="my-4 w-32 " />
        <p className="text-gray text-sm  sm:text-1xl md:text-xl text-center mb-10  text-stone-100 font-nunito-bold relative z-10">
          ¡El camino al mundo de los Datos comienza acá!
        </p>
        <TypewriterEffect className="mb-3" words={wordHome} />
        <img src={Datazon} alt="Datazon" className="my-4 w-64 sm:w-96" />

        <p className="text-1xl sm:text-2xl md:text-3xl lg:text-3xl text-center mb-4 mt-4 font-semibold text-stone-100 font-nunito-bold">
          8 de Mayo - 13:15hs Auditorio UTN
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 mb-4 relative z-10">
          <Link to="register">
            <button className=" cursor-pointer w-40 h-10 rounded-xl bg-[#00D63A] border dark:border-black border-transparent text-black font-opensans-bold text-md font-bold ">
              Comenzar!
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center h-20 relative z-10">
          <a href="https://piconsulting.com.ar/">
            <img src={Logo} alt="Logo" className="w-60 h-20" />
          </a>
        </div>
        <p style={{ color: "gray", fontSize: "11px" }}>
          <small>Version : 1.1.7</small>
        </p>
      </div>
      <BackgroundBeams className="absolute " />
    </>
  );
};

export default home;
