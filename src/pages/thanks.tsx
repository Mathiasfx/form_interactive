import { DotBackground } from "../components/ui/dotBackground";
import Logo from "../assets/logopi.svg";
import { useState, useEffect } from "react";

const Thanks = () => {
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const isDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTextColor(isDarkTheme ? "text-white" : "text-black");
    console.log(isDarkTheme);
  }, []);
  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col relative ">
      <DotBackground>
        <p className="text-4xl dark:text-white text-warmGray-200 sm:text-5xl font-bold relative z-20  py-8 text-center">
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
