import { useState } from 'react';
import Common from './common';
import Header from '../header';
// import axios from 'axios';


function List(props) {

  

  let [list, addlist] = useState(["book", "pen", "pencil"]);
  

  const Delete = (i) => {
    let newlist = list.filter((delvalue) => list[i] !== delvalue);
    addlist(newlist)
  }


  const Edit = (i)=>{
    let editid= prompt(list[i],document.getElementById(`edit${i}`).innerHTML);
    console.log(editid)
    document.getElementById(`edit${i}`).innerHTML=editid
    
  }

  return (

    
    <div className="App">

      <Header />
      {props.isLogin.condition?<h1>Welcome {props.isLogin.email}</h1>: <h1>Guest</h1>}
      <table border={3} cellPadding={24} cellSpacing={0} style={{borderRadius:10}}>
        <tr>
          <th>index</th>
          <th>value</th>
          <th>id</th>
          <th>detete</th>
          <th>edit</th>
        </tr>
        {list.map((value, i) => (
          <tr>
            <td>{i + 1}</td>
            <td id={`edit${i}`}>{value}</td>
            <td ></td>
            <td><button type='button' onClick={() => Delete(i)}>delete</button></td>
            <td><button type='button' onClick={() => Edit(i)}>edit</button></td>
          </tr>
        ))
        }

      </table><br/> 
        

        <Common funct={addlist} var={list}/><br/><br/>

    </div>
  );
}

export default List;
