import React from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList"

class App extends React.Component{
  state = {
    visible: true
  }

  render(){
    return(
      <div className="App">
        <ToDoList />
      </div>
    );
  };
};

export default App;
