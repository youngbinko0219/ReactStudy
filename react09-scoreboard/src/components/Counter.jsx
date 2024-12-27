import React from "react";

export default function Counter(props) {
  return (
    <>
      <div className="counter">
        {/* player 컴포넌트에서 props를 통해 내려준 함수를 호출하여 점수를 증감시킨다. */}
        <button
          className="counter-action decrement"
          onClick={(e) => {
            // 함수 호출시 flag와 플레이어의 일련번호를 전달
            props.onChangeScore("-", props.idx);
          }}
        >
          -
        </button>
        <span className="counter-score">{props.score}</span>
        <button
          className="counter-action increment"
          onClick={(e) => {
            props.onChangeScore("+", props.idx);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
