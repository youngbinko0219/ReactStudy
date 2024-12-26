import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  // step1 : 렌더링의 횟수를 알고싶어 이와같이 state로 처리하면
  // 첫번째 렌더링 후 useEffect가 실행되고, 내부에서 다시 state가 변경되니 렌더링이 지속적으로 되어
  // 무한루프에 빠지게된다.
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   console.log("렌더링01", renderCount);
  //   setRenderCount(renderCount + 1);
  // });

  // step2 : 만약 이 상황에 일반변수를 사용하면 렌더링 될때마다 0으로 초기화되므로 횟수를 알 수 없게된다.
  // 따라서 변화는 감지해야 하지만 렌더링은 안되야 하는 상황에서 useRef는 유용하게 사용된다.
  const renderCount = useRef(1);
  useEffect(() => {
    console.log("렌더링02", renderCount.current);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Count증가</button>
    </>
  );
}

export default App;
