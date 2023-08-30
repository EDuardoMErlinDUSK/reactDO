import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const[ listaTarefas, setListaTarefas ]= useState( []);
  const [ tarefa, setTarefa]= useState ({ id: '', texto: "",status:"" });

function addTarefa()
{
  if( tarefa.texto !== ""){
    setListaTarefas([...listaTarefas, tarefa]);
  }
  
}

function ExcluirTarefa(id)
{
  const novaLista = listaTarefas.filter( (tarefa) => tarefa.id !== id);
  setListaTarefas( novaLista);
}

function statusTarefa( id, status ){
  const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
  listaTarefas[index].status = !status;
  setListaTarefas( [...listaTarefas] );
}

useEffect(() => {
  setTarefa( {id: "", texto: "", status:""} );
}, [listaTarefas])

  return (
    <>
    <header>
      <h1></h1>
    </header>
    
    <div className="resposta">
      <ul>
        {listaTarefas.map( (item, index) => (
          <div className="Lista"> <button  className="btnOK" onClick={() => ExcluirTarefa(item.id)} ><i class="fa-solid fa-trash-can"></i></button> <li  className={item.status ? "pronto" : "naopronto"} key={item.id}>{item.texto}  <button className="btnOK" onClick={() => statusTarefa(item.id, item.status)}>{item.status ? 'OK' : 'OK'}</button> </li></div>
        ))}
      </ul>
    </div>
    <div className="digitando">
      <i class="fa-solid fa-circle-plus fa-3x mais"></i>
      <input className="place" type="text" nome="tarefa" placeholder="" value={tarefa.texto} onChange={(e) => setTarefa( { id:Math.random(), texto: e.target.value, status: false})}></input>
      <button className="BotaoPronto" onClick={addTarefa}>Pronto</button>
    </div>
    </>
  );
}
export default App;
