import React from "react"
import './App.css';
import Header from "./Components/Header"
import TaskList from "./Components/TaskList"

function App() {
  var [Data, setData]=React.useState(["task1", "task 2", "task 3", "task 4"])
  var [input, setInput] = React.useState("")

  function appendElement(){
    if(input!==""){
      setData(Data=>[...Data, input])
      setInput("")
    }
  }
  function handleDelete(id){
    setData(prevData => prevData.filter((_, index) => index !== id))
  }

  function handleComplete(id){
    
  }
  return (
    <div className="App">
      <Header/>
      <input className="inputEl" type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      <button className="addButton" onClick={appendElement}>Add</button>
      <TaskList data={Data} handleDelete={handleDelete} handleComplete={handleComplete}/>
    </div>
  );
}

export default App;
