import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increaseValue = () => {
    if (count < 20) {
      setCount(++count);
    }
  };

  const decreaseValue = () => {
    if (count > 0) {
      setCount(--count);
    }
  };

  return (
    <>
      <h1>Hii there!!!. This is a Counter AppS</h1>
      <h2>Counter Value : {count}</h2>
      <button type="submit" onClick={increaseValue}>
        Increment
      </button>
      <button type="submit" onClick={decreaseValue}>
        Decrement
      </button>
    </>
  );
}

export default App;
