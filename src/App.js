import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import TaskList from "./Components/TaskList"
function App() {
  function appendElement(){

  }
  return (
    <div className="App">
      <Header/>
      <input type="text"/>
      <button className="addButton" onClick={appendElement}>Add</button>
      
      <TaskList/>
      
    </div>
  );
}

export default App;
