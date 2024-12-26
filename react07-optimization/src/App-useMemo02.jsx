import "./App.css";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [switching, setSwitching] = useState(true);

  // step1 : 상수 선언 : 초기값은 on으로 설정됨
  // const switchMode = switching ? "On(켜짐^^)" : "Off(꺼짐ㅜㅜ)";

  // step 2 : 상수를 객체로 변경
  // JS에서는 객체를 선언할 때마다 새로운 참조값을 할당받게 된다.
  // 즉 새로운 렌더링을 위해 App 컴포넌트가 호출될 때마다 참조값이 변경된다.
  // 따라서 useEffect()가 지속적으로 호출된다.
  // const switchMode = {
  //   nowState: switching ? "On(켜짐^^)" : "Off(꺼짐ㅜㅜ)",
  // };

  // step 3 :
  const switchMode = useMemo(() => {
    return { nowState: switching ? "On(켜짐^^)" : "Off(꺼짐ㅜㅜ)" };
  }, [switching]);

  // step1 :
  // 기본 타입의 값을 의존성 배열에 추가해둔 상태이므로 값의 변화가 있을 때만 useEffect가
  // 재호출된다.
  // step2 :
  // 객체형으로 변경하면 App 컴포넌트가 렌더링 될 때마다 새로운 참조값을 할당받게 되므로
  // 값이 변화된 것으로 인식하여 useEffect()가 지속적으로 호출되는 문제가 생긴다.
  // 즉 애플리케이션의 속도가 매우 느려질 수 있다.
  // step3 :
  // App 컴퍼넌트가 렌더링 될 때마다 지속적으로 참조값이 변경되는 부분을 차단하기 위해
  // useMemo를 통해 Momoization한 값을 사용하도록 코드를 수정함함
  useEffect(() => {
    console.log("useEffect() 호출됨");
  }, [switchMode]);

  return (
    <>
      <h2>정수 카운터</h2>
      {/* 스핀박스를 누르면 정수 state가 변경된다. */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>토글 스위치</h2>
      {/* step1 : 원시자료형일 때 */}
      {/* <p>스위치 상태(Step1) : {switchMode}</p> */}
      {/* step2 : 객체(참조형)일 때 */}
      <p>스위치 상태(Step2) : {switchMode.nowState}</p>
      {/* 버튼을 누르면 boolean 타입의 state가 변경된다. */}
      <button onClick={() => setSwitching(!switching)}>스위치 조작</button>
    </>
  );
}

export default App;
