import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./components/Page";

function App() {
  // 테마 변경을 위한 state
  const [isDark, setIsDark] = useState(false);

  // 데이터 공유를 위한 프로바이더는 2개 이상 겹처서 래핑할 수 있다.
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <Page></Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
