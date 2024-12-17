import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue=()=>{
    if(count>19){
      setCount(20)
    }else{
      setCount((count)=>{return count+1})
      setCount((count)=>count+1)
      setCount(count=>count+1)        // useState sent update to ui or variable Batches  -- using Fiber algorithm
    }
  }
  const removeValue=()=>{
    if (count<1){
      setCount(0)
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
      <div className="card">
        <h2>Counter value :{count} </h2>
        <button onClick={addValue}>ADD value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </div>
    </>
  );
}

export default App;
