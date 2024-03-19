import { WavyBackground } from "../components/ui/wavy-background";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { wordHome } from "../utils/texts";
import Logo from "../assets/logopi.svg";

const home = () => {
  return (
    <>
      <WavyBackground className="w-full flex flex-1 justify-center relative">
        <div className=" max-w-screen-md flex flex-col items-center justify-center h-[40rem] mb-10 ">
          <p className="text-gray text-sm  sm:text-1xl md:text-xl text-center mb-10  text-warmGray-100 font-nunito-bold">
            ¡El camino al mundo de los Datos comienza acá!
          </p>
          <TypewriterEffect words={wordHome} />
          <p className="text-1xl sm:text-2xl md:text-3xl lg:text-3xl text-center mb-4 mt-4 font-semibold text-warmGray-100 font-nunito-bold">
            Martes 19 marzo - 13:15hs Auditorio UTN
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 mb-4">
            <Link to="register">
              <button className="w-40 h-10 rounded-xl bg-yellow-500 border dark:border-black border-transparent text-black font-opensans-bold text-md font-bold ">
                Comenzar!
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center h-20">
          <img src={Logo} alt="Logo" className="w-60 h-20" />
        </div>
        <p
          style={{ color: "gray", fontSize: "11px" }}
          className="absolute bottom-12"
        >
          <small>Version : 1.1.4</small>
        </p>
      </WavyBackground>
    </>
  );
};

export default home;
