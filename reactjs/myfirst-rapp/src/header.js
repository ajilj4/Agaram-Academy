import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Subheader} from './subheader';


function Header(props){
   
    let name="Agaram Institute";

    return(
        <>
        
        <h1>Welcome to {props.name+ name}<br></br><Subheader/></h1>
       
        </>
    );
}

export  {Header};