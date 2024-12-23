import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/*
라우터 설정을 위해 최상위 컴포넌트인 <App>을 BrowserRouter 컴포넌트로 래핑한다.
이 설정은 app.jsx에도 동일하게 적용할 수 있다. 다만 둘 중 하나에만 적용해야한다.
*/

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
