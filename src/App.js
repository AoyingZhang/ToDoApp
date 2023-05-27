import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import TaskList from "./Components/TaskList"
import Data from "./Data"
function App() {
  const input = document.getElementById("inputEl")
  function appendElement(){
    Data.push(`
    {
      Id:${Data.length+1}, 
      Title: "${input.value}"
    }
    `)
    input.value=""
  }
  return (
    <div className="App">
      <Header/>
      <input id="inputEl"type="text"/>
      <button className="addButton" onClick={appendElement}>Add</button>
      
      <TaskList/>
      
    </div>
  );
}

export default App;
