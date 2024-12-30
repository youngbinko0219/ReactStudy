import { useState } from "react";
import "./App.css";

// App 컴포넌트가 전달한 props를 다시 하위 컴포넌트로 전달
const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark}></Header>
      <Content isDark={isDark}></Content>
      <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
    </div>
  );
};

const Header = ({ isDark }) => {
  // isDark의 값에 따라 배경색과 글자식이 토글되도록 스타일을 설정
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 헝딜동</h1>
    </header>
  );
};

const Content = ({ isDark }) => {
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>헝딜동 반가워</p>
    </div>
  );
};

const Footer = ({ isDark, setIsDark }) => {
  // 다크모드를 토글시켜주는 함수
  const toggleTheme = () => {
    // state를 변경하는 세터 함수 사용
    setIsDark(!isDark);
  };
  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <input
        type="button"
        value="Dark Mode"
        className="button"
        onClick={toggleTheme}
      ></input>
    </div>
  );
};

function App() {
  // 다크모드 변경을 위한 state
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      {/* 자식 컴포넌트로 state로 선언한 변수와 함수를 전달달 */}
      <Page isDark={isDark} setIsDark={setIsDark}></Page>
    </>
  );
}

export default App;
