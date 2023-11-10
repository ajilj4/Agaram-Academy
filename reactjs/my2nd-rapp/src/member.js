import React from "react";
import { useState } from "react";
import Common from "./common";

export default function Members(){

let [members, addmember] = useState(["ajay", "shek", "sobith"]);

    return(
        <>
        <table border={3} cellPadding={24} cellSpacing={0} style={{borderRadius:10}}>
        <tr>
          <th>index</th>
          <th>value</th>
          <th>detete</th>
          <th>edit</th>
        </tr>
        {members.map((value, i) => (
          <tr>
            <td>{i + 1}</td>
            <td id={`edit${i}`}>{value}</td>
            <td><button type='button' >delete</button></td>
            <td><button type='button' >edit</button></td>
          </tr>
        ))
        }

      </table>
      <Common funct={addmember} var={members}/><br/>
      </>
    )
}