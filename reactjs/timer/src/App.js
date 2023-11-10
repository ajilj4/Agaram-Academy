import logo from './logo.svg';
import{useState,useEffect} from 'react';
import './App.css';

function App() {
  
      const [count, setCount] = useState(0);
	let [istrue,setistrue]= useState(true)

	useEffect(()=>{
		if (istrue){
		setCount(count+1)
		}
	},[count,istrue])

	
 return (
    <div className="App">
      <header className="App-header">
	  	<h1>timer</h1>
			<code>{count}</code>
			<button onClick={()=>setistrue(!istrue)}>{istrue?"stop":"start"}</button>
      <button onClick={async()=>{await setistrue(false);
      setCount(0)
    }}>reset</button>
		
	
      </header>
    </div>
  );
}

export default App;
