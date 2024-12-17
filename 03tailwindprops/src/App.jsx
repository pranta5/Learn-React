import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let Obj = {
    name:"pranta",
    age:"25"
  }

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl mb-4">hello</h1>
      <Card username="pranta" btnText="click me"/>
      <Card username="deva"/>

    </>
  );
}

export default App;
