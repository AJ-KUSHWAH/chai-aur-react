import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(password);

  const handleGenerate = useCallback(() => {
    const numbers = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!@#$%^&*()_+";

    let allCharacters = characters + specialCharacters;
    if (numAllowed) allCharacters += numbers;
    if (charAllowed) allCharacters += specialCharacters;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
    }

    setPassword(newPassword);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassward = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    handleGenerate();
  }, [numAllowed, charAllowed, length]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-4">
          Passward Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassward}
            type="submit"
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <span>length: {length}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              id="numberInput"
            />
            <label>numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="charInput"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
