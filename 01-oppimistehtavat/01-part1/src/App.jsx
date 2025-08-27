import "./App.css";

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <br />
      <button onClick={() => setCounter(0)}> zero </button>
    </>
  );
};

export default App;
