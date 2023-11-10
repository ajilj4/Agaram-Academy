import React from "react";
import { useState } from "react";

export default function Common(props){

    let [addvalue, addvaluefn] = useState("");


    return(
        <from>
      <input type='text' onKeyUp={(e) => addvaluefn(e.target.value)} id='clean' style={{width:300, height:30,borderRadius:10,borderColor:'black'}}/>{"    "}
      <button type='button' onClick={
        () => { props.funct([...props.var, addvalue]);document.getElementById('clean').value=" " }
      } style={{padding:5,color:'white',backgroundColor:'black',border:"none",borderRadius:5}}>Add item</button>
      </from>
    )
}

// const Edit = (i)=>{
//     let editid= prompt(list[i],document.getElementById(`edit${i}`).innerHTML);
//     console.log(editid)
//     document.getElementById(`edit${i}`).innerHTML=editid
    
//   }



// const Delete = (i) => {
//     let newlist = list.filter((delvalue) => list[i] !== delvalue);
//     addlist(newlist)
//   }