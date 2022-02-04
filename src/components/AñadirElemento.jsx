import { useState} from "react";

export default function AñadirElemento({tareas,setTareas}){

    const [inputValue,setInputValue] = useState("")
   
    const controlarEnvio = (e) => {
        e.preventDefault();
        setTareas(tareas => [...tareas,inputValue]);
        setInputValue("");
      }
    

  
    return(
        <form onSubmit={controlarEnvio}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </form>
    )
}
