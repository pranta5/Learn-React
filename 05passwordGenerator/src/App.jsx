import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) str += "1234567890";
    if (CharacterAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let charPosition = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charPosition);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharacterAllowed, setPassword]);

  let copyPasswordClipboard = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10)  // range select
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharacterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-300 text-orange-500">
        <h1 className=" text-white text-center">Password Genertor</h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPasswordClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-white"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberinput"
              onChange={() => {
                setNumberAllowed((PrevnumberAllowed) => !PrevnumberAllowed);
              }}
            />
            <label htmlFor="numberinput">Number</label>

            <input
              type="checkbox"
              defaultChecked={CharacterAllowed}
              id="charinput"
              onChange={() => {
                setCharacterAllowed(
                  (PrevCharacterAllowed) => !PrevCharacterAllowed
                );
              }}
            />
            <label htmlFor="charinput"> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
