import { WavyBackground } from "../components/ui/wavy-background";
import { Link } from "react-router-dom";
import Robot from "../assets/robot_neutro.png";

const home = () => {
  return (
    <>
      <WavyBackground className="w-full flex flex-1 justify-center relative">
        <div className=" max-w-screen-md flex flex-col items-center justify-center h-[40rem] mb-10 ">
          <p className="text-gray text-sm  sm:text-1xl md:text-xl text-center mb-10  text-warmGray-100 font-nunito-bold">
            Selecciona el sorteo a realizar
          </p>
          <img src={Robot} alt="Logo" className="w-2/4" />
         
         
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 mb-4">
            <Link to="pixie">
              <button className="w-40 h-10 rounded-xl bg-yellow-500 border dark:border-black border-transparent text-black font-opensans-bold text-md font-bold ">
               Pixie
              </button>
            </Link>
            <Link to="forms">
              <button className="w-40 h-10 rounded-xl bg-yellow-500 border dark:border-black border-transparent text-black font-opensans-bold text-md font-bold ">
               Forms
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center h-20">
          <img src={Logo} alt="Logo" className="w-60 h-20" />
        </div> */}
        <p
          style={{ color: "gray", fontSize: "11px" }}
          className="absolute bottom-12"
        >
          <small>Version : 1.1.2</small>
        </p>
      </WavyBackground>
    </>
  );
};

export default home;
