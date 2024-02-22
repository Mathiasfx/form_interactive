import { WavyBackground } from "../components/ui/wavy-background";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { wordHome } from "../utils/texts";
import Logo from "../assets/logopi.svg";

const home = () => {
  return (
    <>
      <WavyBackground className="w-full flex flex-1 justify-center">
        <div className=" max-w-screen-md flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-gray  sm:text-1xl md:text-xl text-center mb-10 mt-10 text-warmGray-100 font-nunito-bold">
            ¡El camino al mundo de los Datos comienza acá!
          </p>
          <TypewriterEffect words={wordHome} />
          <p className="sm:text-2xl md:text-3xl lg:text-3xl text-center mb-4 mt-4 font-semibold text-warmGray-100 font-nunito-bold">
            Martes 19 marzo, 14:00hs Auditorio UTN
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <Link to="register">
              <button className="w-40 h-10 rounded-xl bg-yellow-500 border dark:border-black border-transparent text-black font-opensans-bold text-md font-bold ">
                Comenzar!
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-5 absolute flex justify-center items-center">
          <img src={Logo} alt="Logo" className="w-60" />
        </div>
      </WavyBackground>
    </>
  );
};

export default home;
