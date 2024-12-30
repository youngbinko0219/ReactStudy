import { useState } from "react";
import "./App.css";
// 컴포넌트 임포트
import CompState1 from "./common/CompProps1";
import CompContext1a from "./common/CompContext1a";
import CompContext1b from "./common/CompContext1b";
import { SimpleContext } from "./context/SimpleContext";

function App() {
  const [myNumber, setMyNumber] = useState(1);

  return (
    <div>
      <h2>최상위 컴포넌트</h2>
      {/* state로 선언한 myNumber의 값을 변경하기 위한 입력상자 */}
      <input
        type="number"
        value={myNumber}
        onChange={(e) => {
          setMyNumber(e.target.value);
        }}
      />

      <div className="App">
        <h3>props를 통한 데이터 전달</h3>
        {/* 문자열과 숫자를 props로 전달 */}
        <CompState1 propData={"props를 통한 데이터 전달"} myNumber={myNumber} />
      </div>

      {/* 하위 컴포넌트로 전달하는 props없이 삽입 */}
      <div className="App">
        <h3>useContext 적용</h3>
        <CompContext1a />
      </div>

      {/* 컨텍스트 프로바이더를 이용해서 하위 컴포넌트를 래핑한다.
      그러면 하위 컴포넌트는 프로바이더가 제공하는 데이터를 공유할 수 있다. */}
      <SimpleContext.Provider
        value={{ str: "provider의 초기값", num: myNumber }}
      >
        <div className="App">
          <h3>useContext 적용 및 provider 래핑</h3>
          <CompContext1b />
        </div>
      </SimpleContext.Provider>
    </div>
  );
}

export default App;
