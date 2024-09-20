import { useState, useEffect } from "react";
import { DotBackground } from "../components/ui/dotBackground";
import PixieSorteo from "../assets/pixie-sorteo.gif"
import "../App.css"
import NameList from "../components/nameList";
import getUsers from "../api/getUsers";
import Connect from "../assets/conect azul.png"



const Lotery = () => {

    const[participantes,setParticipantes]= useState<string[]>([]);
    const [isRendering, setIsRendering] = useState(true);
    const [nombre, setNombre] = useState("");
    const [indexNumber, setIndexNumber] = useState(0);
    const [ganadores, setGanadores] = useState<string[]>([]);
    const [lista,setLista]=useState<string[]>([]);
    const [sorteoActivo, setSorteoActivo] = useState(false);
    const pathname = location.pathname; // Obtener la ruta actual
    const type = pathname === "/pixie" ? "pixie" : "form"; // Determinar el tipo según la ruta
    

    const getUsersAll = async() => {    
      try {
     
          const response = await getUsers(type);
          const nuevosParticipantes = response.result.map((name:string) => name);      
          setGanadores(nuevosParticipantes);  
          //desordenar          
          const compareFunction = () => Math.random() - 0.5;
          nuevosParticipantes.sort(compareFunction);    
          setParticipantes([...participantes, ...nuevosParticipantes]);
      } catch (error) {
          console.log(error);      
      }
  }
  useEffect(() =>{
    getUsersAll();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

   


const seleccionarNombres = () => {
  if (!sorteoActivo) {
    setSorteoActivo(true);
    setIsRendering(!isRendering);
    setNombre(ganadores[indexNumber]);
    setLista([...lista, ganadores[indexNumber]]);
    incrementarIndex();
    
    const nuevosParticipantes = participantes.filter(
      (nombre) => nombre !== ganadores[indexNumber]
    );
    setParticipantes(nuevosParticipantes);
  } else {
    setSorteoActivo(false); 
    setIsRendering(!isRendering); 
  }
};

  const incrementarIndex = () => {
    if (ganadores.length - 1 > indexNumber) {
      setIndexNumber(indexNumber + 1);
    }
  };

  return (
    <div>
        <div className="bg-violet-700 min-h-screen flex flex-col justify-between items-center relative">
            <DotBackground>
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                
                <img src={PixieSorteo} alt="Pixie Sorteo" className="pixie" />
                  <div className="contenedorNombre items-center justify-center ">
                    {ganadores.length > 0  ?
                    <h2 className="text-white items-center text-center text-2xl">
                      {isRendering
                        ? <NameList names={participantes}/>
                        : <p className="text-5xl">{nombre}</p>
                      }
                    </h2> :  
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div>
                    </div>}
                  </div>

    
                <button className="btnsortear" onClick={()=>seleccionarNombres()}>
                  {!isRendering ? "Sortear" : "Detener"}
                </button>

              </div>
              <div className="col-span-1 flex flex-col justify-start  h-full w-2/4 ">           
                <h2 className="text-white text-5xl text-center mb-4">Ganadores</h2>
                {lista.length > 0 &&
                <ul className="text-white text-2xl text-left ml-4 w-full ">
                  {lista.map((ganador,index) => {
                    return <li key={index} >{ganador}</li>
                  })}
                </ul>}
              </div>
            </div>
            <img src={Connect} width="260px" alt="Logo Connect" className="absolute bottom-0 filter brightness-0 invert grayscale" />
              
            </DotBackground>
        </div>
    </div>
  );
};

export default Lotery;