import { useCallback, useEffect, useState } from "react";
import "./App.css";

// box 컴포넌트. props를 통해 <div>의 스타일을 전달받음
const Box = ({ createBoxStyle }) => {
  // state : 초기값으로 빈 객체를 설정정
  const [style, setStyle] = useState({});

  // props를 통해 전달받은 createBoxStyle이 변경될 때마다 호출되도록 정의
  useEffect(() => {
    console.log("박스키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  // <div> 박스를 렌더링링
  return <div style={style} />;
};

function App() {
  // 박스와 배경색 설정을 위한 state 선언언
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // step1 : App 컴포넌트가 렌더링 될 때마다 새로운 참조값이 부여된다.
  // 따라서 테마 변경을 눌려도 이와 상관 없는 박스 키우기가 출력된다.
  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  },[size]);


  return (
    // <div> 박스의 배경색이 isDark에 따라 black/white로 변경된다.
    <div
      className="App"
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <h2>useCallback()</h2>
      {/* 스핀박스로 변경한 값이 size를 변경하고 새롭게 렌더링된다. */}
      <input
        type="number"
        value={size}
        step={5}
        onChange={(e) => setSize(e.target.value)}
      />
      {/* 버튼을 누를 때마다 black/white가 토글된다. */}
      <button onClick={() => setIsDark(!isDark)}>테마변경</button>
      {/* style을 반환하는 함수를 props로 전달한다. */}
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App;
