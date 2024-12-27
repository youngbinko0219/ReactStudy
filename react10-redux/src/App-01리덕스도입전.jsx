import { useState } from "react";
import "./App.css";

// 부모 컴포넌트인 App에서 내려받은 props의 함수를 다시 자식 컴포넌트로 전달한다.
// 즉 함수의 기능을 그대로 내려주는 것이다.
const Right1 = (props) => {
  return (
    <div>
      <h2>Right1</h2>
      <Right2
        onMyPlus2={() => {
          props.onMyPlus1();
        }}
      ></Right2>
    </div>
  );
};

const Right2 = (props) => {
  return (
    <div>
      <h2>Right2</h2>
      <Right3
        onMyPlus3={() => {
          props.onMyPlus2();
        }}
      ></Right3>
    </div>
  );
};

const Right3 = (props) => {
  // Right의 최하위 컴포넌트에는 click 이벤트를 통해 부모쪽에서 전달된 함수를 호출한다.
  // 그러면 right3 > right2 > right1 > App과 같은 순서로 호출된다.
  return (
    <div>
      <h2>Right3</h2>
      <input
        type="button"
        value="+"
        onClick={() => {
          props.onMyPlus3();
        }}
      ></input>
    </div>
  );
};

// App 컴포넌트로부터 전달받은 props를 자식 컴포넌트로 재전달한다.
const Left1 = (props) => {
  return (
    <div>
      <h2>Left1 : {props.number1}</h2>
      <Left2 number2={props.number1}></Left2>
    </div>
  );
};

const Left2 = (props) => {
  return (
    <div>
      <h2>Left2 : {props.number2}</h2>
      <Left3 number3={props.number2}></Left3>
    </div>
  );
};

// Left의 최하위 컴포넌트에서는 props로 전달받은 값을 출력한다.
const Left3 = (props) => {
  return (
    <div>
      <h2>Left3 : {props.number3}</h2>
    </div>
  );
};

function App() {
  const [number, setNumber] = useState(1);

  return (
    <>
      <div className="root">
        <h2>React-Redux : {number}</h2>
        <div id="grid">
          <Left1 number1={number}></Left1>
          <Right1
            onMyPlus1={() => {
              setNumber(number + 1);
            }}
          ></Right1>
        </div>
      </div>
    </>
  );
}

export default App;
