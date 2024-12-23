import "./App.css";

/*
JSX에서 스타일을 적용하는 방법 :
JSX는 HTML과는 조금 다른 방식으로 스타일을 적용해야 한다.
class 속성은 className으로 변경해야 한다.
JS에서는 class를 이미 예약어로 사용하고 있기 때문이다.
id 속성은 그대로 사용할 수 있다.
style 속성을 통해 인라인 방식을 사용할 때는 컬리브레이스(콧수염괄호)로 JSON객체 형태의 값을
부여해야한다.
*/
function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana",
  };
  return (
    <div className="App">
      <h2>React - Style지정하기</h2>
      <ol>
        <li style={{ color: "red" }}>프론트엔드</li>
        {/* 스타일 속성을 직접 부여할 때는 아래와 같이 컬리브레이스를 사용한다. */}
        <ul style={mystyle}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>jQuery</li>
        </ul>
        {/* App.css에 스타일시트 정의 */}
        <li className="backEnd">백엔드</li>
        <ul>
          <li id="backEndSub">Java</li>
          {/* class 속성을 사용하면 에러가 발생하진 않으나 경고가 뜨므로 react의 권고사항대로
          className을 사용한다. */}
          <li className="warnings">Oracle</li>
          <li>JSP</li>
          <li>Spring Boot</li>
        </ul>
      </ol>
    </div>
  );
}

export default App;
