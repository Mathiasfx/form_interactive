import {useEffect, useState}from 'react'
import "../App.css"




interface NameListProps {
    names: string[];
  }

  const NameList: React.FC<NameListProps> = ({ names }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % names.length);
      }, 500);
  
      return () => clearInterval(intervalId);
    }, [names]);

  return (
  
    <div className="overflow-hidden h-10"> 
      <ul className="list-none p-0 m-0 animate-scrolling">
        <span className='text-5xl'>{names[currentTextIndex]}</span>
      </ul>
    </div>
      
  
  );
};

export default NameList;

