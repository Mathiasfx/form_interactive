

import { WavyBackground } from "../components/ui/wavy-background";
import { Link } from "react-router-dom";
import Robot from "../assets/robot_neutro.png";
import Logos from "../assets/logos empresas.png";
import Connect from "../assets/conect color.png"





const Home = () => {





  
  return (
    <>
      <WavyBackground className="w-full flex flex-1 justify-center relative">
        <div className=" max-w-screen-md flex flex-col items-center justify-center h-[40rem] mb-10 ">
          <p className="text-gray text-sm  sm:text-1xl md:text-xl text-center mb-10  text-warmGray-100 font-nunito-bold">
            Selecciona el sorteo a realizar
          </p>
          <img src={Robot}  alt="Logo" className="w-2/4" />
          <img src={Logos} alt="logos" width="200px" className="filter brightness-0 invert grayscale" style={{ left: "50%", transform: "translateX(0)" }} />

         
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 mb-4">
            <Link to="pixie">
              <button className="w-40 h-10 rounded-xl bg-violet-700 border dark:border-black border-transparent text-white font-opensans-bold text-md font-bold ">
               Pixie
              </button>
            </Link>
            <Link to="forms">
              <button className="w-40 h-10 rounded-xl  bg-violet-700 border dark:border-black border-transparent text-white font-opensans-bold text-md font-bold ">
               Forms
              </button>
            </Link>
          </div>
        </div>
       
       
        <img src={Connect} alt="logos" width="250px" className="absolute mt-6 bottom-0 filter brightness-0 invert grayscale" style={{bottom:"-10%", transform:"translateY(-50)"}} />

      </WavyBackground>
    </>
  );
};

export default Home;
