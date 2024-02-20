import { WavyBackground } from "../components/ui/wavy-background";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { wordHome } from "../utils/texts";

const home = () => {
  return (
    <WavyBackground className="w-full flex flex-1 justify-center">
      <div className=" max-w-screen-md flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-white  sm:text-1xl md:text-xl text-center  mb-10">
          El camino al conocimiento de los Datos comienza desde aqui
        </p>
        <TypewriterEffect words={wordHome} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <Link to="register">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-md font-bold ">
              Comenzar!
            </button>
          </Link>
        </div>
      </div>
    </WavyBackground>
  );
};

export default home;
