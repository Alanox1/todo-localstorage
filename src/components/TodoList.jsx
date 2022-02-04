export default function TodoList({tarea,tareas,setTareas}){

    const eliminarTarea = (id) => {
        tareas.splice(id, 1);
        setTareas([...tareas]);
    }
    
    return(
       <li>
           <p>{tarea}</p>
           <button onClick={() => eliminarTarea()}>x</button>
       </li>
            
        
    )
}