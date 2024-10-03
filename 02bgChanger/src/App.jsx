import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="flex flex-wrap items-end justify-center w-full h-screen "
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-4 justify-center mb-12 p-2 rounded-md w-2/3 bg-white">
        <button
          onClick={() => setColor("red")}
          className="rounded bg-red-400 text-white px-2"
          type="submit"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="rounded bg-blue-400 text-white px-2"
          type="submit"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="rounded bg-green-400 text-white px-2"
          type="submit"
        >
          Green
        </button>
        <button
          onClick={() => setColor("purple")}
          className="rounded bg-purple-400 text-white px-2"
          type="submit"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("black")}
          className="rounded bg-slate-800 text-white px-2"
          type="submit"
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default App;
