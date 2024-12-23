import "./App.css";
/*
react-router-dom으로부터 임포트한 컴포넌트와 훅훅
*/
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

/*
NavLink 컴포넌트는 <a>태그와 같이 하이퍼링크를 제공한다.
단, <a> 태그에서 preventDefault()가 적용된 형태로 화면의 깜빡임 없이 페이지 이동을 할 수 있다.
또한 링크를 클릭 했을 때 active라는 클래스 속성을 자동으로 추가해준다.
*/
const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <NavLink to="/xyz">잘못된 URL</NavLink>&nbsp;
      {/* <a href="/" onClick={(e) => e.preventDefault()}>
        A 태그
      </a>
      &nbsp; */}
      {/* <Link to="/xss">잘못된 Link</Link>&nbsp; */}
    </nav>
  );
};

const CommonLayout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: "10px" }}>
        아웃렛 컴포넌트 알아보기
      </header>
      <article>
        {/* 각 페이지의 컴포넌트가 보여지는 부분에 설정한다. */}
        <Outlet />
      </article>
      <footer style={{ background: "lightgray", padding: "10px" }}>
        공통 레이아웃
      </footer>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h2>React Home</h2>
      <p>React Router에 대해 학습합니다.</p>
    </>
  );
};

const LayoutIndex = () => {
  return (
    <>
      <h2>레이아웃 인덱스 페이지</h2>
      <ul>
        <li>Outlet 컴포넌트 위치에 출력됩니다.</li>
        <li>Route 설정시 index로 지정합니다.</li>
      </ul>
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        페이지를 찾을 수 없습니다.
        <br />
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

const RouterHooks = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const pageNum = searchParams.get("pageNum");

  const changeMode = () => {
    const nextMode = mode === "list" ? "view" : "list";
    setSearchParams({
      mode: nextMode,
      pageNum,
    });
  };
  const nextPage = () => {
    let pageTemp =
      pageNum === null || isNaN(pageNum) ? 1 : parseInt(pageNum) + 1;
    if (pageTemp === 11) {
      pageTemp = 10;
      window.alert("마지막 페이지 입니다.");
    }
    setSearchParams({
      mode,
      pageNum: pageTemp,
    });
  };

  const prevPage = () => {
    let pageTemp =
      pageNum === null || isNaN(pageNum) ? 1 : parseInt(pageNum) - 1;
    if (pageTemp === 0) {
      pageTemp = 1;
      window.alert("첫번째 페이지 입니다.");
    }
    setSearchParams({
      mode,
      pageNum: pageTemp,
    });
  };
  return (
    <>
      <h2>라우터 관련 Hook</h2>
      <div>
        <ul>
          <li>URL : {location.pathname}</li>
          <li>쿼리스트링 : {location.search}</li>
          <li>mode : {mode}</li>
          <li>detail : {pageNum}</li>
        </ul>

        <button onClick={changeMode}>mode변경</button>
        <button onClick={prevPage}>이전 페이지</button>
        <button onClick={nextPage}>다음 페이지</button>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <TopNavi></TopNavi>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
          <Route path="router" element={<RouterHooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
