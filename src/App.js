import { useState ,useEffect} from 'react';
import './App.css';
import AñadirElemento from './components/AñadirElemento';
import TodoList from './components/TodoList';
function App() {
  const [tareas,setTareas] = useState([])
  
  const listItems = tareas.map((el,index) =>  <TodoList id={index} key={index} tarea={el} tareas={tareas} setTareas={setTareas}/>)

   //Solo se ejecuta la primera vez que el componente es renderizado
   useEffect(() => {
    if(localStorage.getItem("tasks")) { //Si existe
        setTareas(JSON.parse(localStorage.getItem("tasks")))
    }
   },[])

   //Se ejecuta cada vez que el state tareas cambie
   useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tareas))
   },[tareas])

   
  return (
    <div className="App">
      <h1>Todo - LocalStorage</h1>
      <AñadirElemento tareas={tareas} setTareas={setTareas}/>
      <ul>
      {listItems}
      </ul>
    </div>
  );
}

export default App;
