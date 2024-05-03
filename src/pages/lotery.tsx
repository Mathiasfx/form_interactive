import { useState, useEffect } from "react";
import { DotBackground } from "../components/ui/dotBackground";
import PixieSorteo from "../assets/pixie-sorteo.gif"
import "../App.css"
import NameList from "../components/nameList";
import getUsers from "../api/getUsers";


const Lotery = () => {

    const[participantes,setParticipantes]= useState<string[]>([]);
    const [isRendering, setIsRendering] = useState(true);
    const [nombre, setNombre] = useState("");
    const [indexNumber, setIndexNumber] = useState(0);
    const [ganadores, setGanadores] = useState<string[]>([]);
    const [lista,setLista]=useState<string[]>([]);
    

    const getUsersAll = async() => {    
      try {
          const response = await getUsers();
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
   
    setIsRendering(!isRendering);
    setNombre(ganadores[indexNumber])  
    setLista([...lista, ganadores[indexNumber]]);


    console.log(ganadores);
    console.log(indexNumber);
    console.log(participantes);
    console.log("Ganadores",lista);
 incrementarIndex();

     
    

   
  };

  const incrementarIndex = () => {

    if(ganadores.length - 1 > indexNumber) {
      setIndexNumber(indexNumber+1);
    }
  }

  <div className="grid grid-cols-2 gap-4 items-center justify-center">
  <div className="col-span-1 flex flex-col items-center justify-center">
    <img src={PixieSorteo} alt="Pixie Sorteo" className="pixie" />
    <div className="contenedorNombre items-center justify-center">
      {participantes.length > 0 ?
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
  </div>

  <div className="col-span-1"></div>
</div>




  return (
    <div>
        <div className="bg-black min-h-screen flex flex-col justify-between items-center relative">
            <DotBackground>
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                
                <img src={PixieSorteo} alt="Pixie Sorteo" className="pixie" />
                  <div className="contenedorNombre items-center justify-center ">
                    {participantes.length > 0  ?
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
                {!isRendering &&
                <ul className="text-white text-2xl text-left ml-4 w-full ">
                  {lista.map((ganador,index) => {
                    return <li key={index} >{ganador}</li>
                  })}
                </ul>}
              </div>
            </div>
              
            </DotBackground>
        </div>
    </div>
  );
};

export default Lotery;