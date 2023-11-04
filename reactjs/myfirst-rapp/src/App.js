import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App(props) {

  let [name,ChangeName]= useState("ajil");
  let [count,Changecount]= useState(0);


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <h1>{count}</h1>
       <button onClick={()=>ChangeName(props.name+props.place)}>change name</button>
    
       <button onClick={()=>Changecount(count+1)}>change no</button>
      </header>
    </div>
  );
}

export default App;
