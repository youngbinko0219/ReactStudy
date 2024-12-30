import { useReducer, useState } from "react";
import "./App.css";

const ActionTypes = {
  depo: "deposit",
  with: "withdraw",
};

// 리듀서 함수 정의
const myReducer = (nowState, myAction) => {
  console.log("리듀서 함수 호출", nowState, myAction);
  // Action을 분석하여 입출금을 처리한다.
  // 변경된 값을 반환하면 즉시 적용되어 렌더링이 새롭게된다.
  switch (myAction.mode) {
    case ActionTypes.depo:
      return nowState + myAction.amount;
    case ActionTypes.with:
      return nowState - myAction.amount;
  }
};

function App() {
  // state 선언 입출금 금액 변경
  const [number, setNumber] = useState(0);
  // reducer 선언 money는 0으로 초기화 디스패치와 리듀서함수 선언
  const [money, myDispatch] = useReducer(myReducer, 0);

  return (
    <>
      <h2>useReducer App</h2>
      {/* 입출금을 위한 금액은 스핀박스를 통해 1000원 단위로 증감한다. */}
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      {/* 앞에서 선언한 상수를 이용해서 Action을 전달한다. */}
      <button
        type="button"
        onClick={() => {
          myDispatch({ mode: ActionTypes.depo, amount: number });
        }}
      >
        입금
      </button>
      <button
        type="button"
        onClick={() => {
          myDispatch({ mode: ActionTypes.with, amount: number });
        }}
      >
        출금
      </button>
    </>
  );
}
export default App;
