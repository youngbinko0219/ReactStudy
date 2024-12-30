import { useReducer, useState } from "react";
import "./App.css";

// useReducet
// useState와 유사하게 상태를 관리한다.
// 여러개의 하위값을 가진 state를 관리할 때 유용하다.
// 컴포넌트에서 상태를 업데이트하는 로직을 분리할 수 있다.
// 형식}
//    Dispatch(Action) => Reducer(prevState,Action)
//    즉 디스패치를 통해 리듀서 함수를 호출하고 파라미터로 전달된 액션에 따라 state를 업데이트한다.

// Reducer함수 : state를 업데이트하는 역할을 한다.
// (Redux의 store와 유사)
const countReducer = (prevCount, action) => {
  // 매개변수로 전달된 Action을 분석해서 state를 변경 후 반환한다.
  // 반환 즉시 반영되어 새롭게 렌더링된다.
  if (action.mode === "up") {
    return prevCount + action.number;
  } else if (action.mode === "down") {
    return prevCount - action.number;
  } else if (action.mode === "reset") {
    return 0;
  }
};

function App() {
  // useReducer 훅 선언
  // 형식]
  //    [state변수명, Dispatch함수] = useReducer(Reducer함수명, 초기값)
  // Dispatch를 통해 Reducer 함수를 호출하여 상태를 변경한다.
  // count의 초기값은 0으로 선언
  const [count, countDispatch] = useReducer(countReducer, 0);
  // number의 초기값은 1로 선언
  const [number, setNumber] = useState(1);

  // number 타입의 <input>에서 스핀박스를 통해 값을 변경하면 호출된다.
  // 변경된 값이 state의 setter 함수를 통해 변경되고 새롭게 렌더링된다.
  const changeNumber = (event) => {
    setNumber(Number(event.target.value));
  };

  // 각 버튼을 누르면 Dispatch를 통해 Reducer 함수를 호출한다.
  // 인수로 전달하는 객체를 Action이라고 하고, 이를 분석해서 증가, 감소, 리셋 3가지로 상태를 변경한다.
  const down = () => {
    countDispatch({ mode: "down", number: number });
  };

  const up = () => {
    countDispatch({ mode: "up", number: number });
  };

  const reset = () => {
    countDispatch({ mode: "reset" });
  };
  return (
    <>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="+" onClick={up} />
        <input type="button" value="reset" onClick={reset} />
        <input type="number" value={number} onChange={changeNumber} />
        <span>{count}</span>
      </div>
    </>
  );
}
export default App;
