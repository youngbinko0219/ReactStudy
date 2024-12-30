import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const down = () => {
    setCount(count - 1);
  };

  const up = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="buton" value="-" onClick={down} />
        <input type="buton" value="+" onClick={up} />
        <input type="buton" value="reset" onClick={reset} />
        <span>{count}</span>
      </div>
    </>
  );
}

export default App;
