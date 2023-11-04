

import { useState } from 'react';

function App() {

  let [list, addlist] = useState(["book", "pen", "pencil"]);
  let [addvalue, addvaluefn] = useState("");

  const Delete = (i) => {
    let newlist = list.filter((delvalue) => list[i] !== delvalue);
    addlist(newlist)
  }

  return (
    <div className="App">
      <table border={1} cellPadding={24} cellSpacing={0}>
        <tr>
          <th>index</th>
          <th>value</th>
          <th>detete</th>
          <th>edit</th>
        </tr>
        {list.map((value, i) => (
          <tr>
            <td>{i + 1}</td>
            <td id={`edit${i}`}>{value}</td>
            <td><button type='button' onClick={() => Delete(i)}>delete</button></td>
            <td><button type='button' onClick={() => {
            document.getElementById(`edit${i}`)
            }}>edit</button></td>
          </tr>
        ))
        }

      </table>
        <from>
      <input type='text' onKeyUp={(e) => addvaluefn(e.target.value)} id='clean'/>
      <button type='button' onClick={
        () => { addlist([...list, addvalue]);document.getElementById('clean').value=" " }
      }>Add item</button>
      </from>



    </div>
  );
}

export default App;
