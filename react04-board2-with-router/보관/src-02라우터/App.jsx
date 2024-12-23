import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function List(props) {
  return (
    <>
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
        {/* 각 링크는 <a>에서 <Link>로 변경 */}
        {/* <a href="/">글쓰기</a> */}
        <Link to="/write">글쓰기</Link>
      </nav>
      <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cen">1</td>
              <td>오늘은 React 공부하는 날</td>
              <td className="cen">낙짜쌤</td>
              <td className="cen">2030-05-05</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

function View(props) {
  return (
    <>
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a>&nbsp;
        <a href="/edit">수정</a>&nbsp;
        <a href="/delete">삭제</a>&nbsp; */}
        <Link to="list">목록</Link>&nbsp;
        <Link to="edit">수정</Link>&nbsp;
        <Link to="write">삭제</Link>&nbsp;
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="20%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>성유겸</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>오늘은 리액트 공부하는 날</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>2023-05-05</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                열심해 해봅시다. <br /> 열공 합시다.
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

function Write(props) {
  return (
    <>
      <header>
        <h2>게시판-작성</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a> */}
        <Link to="/list">목록</Link>
      </nav>
      <article>
        <form>
          <table id="boardTable">
            <tbody>
              <tr>
                <th>작성자</th>
                <td>
                  <input type="text" name="writer" />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input type="text" name="title" />
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <textarea name="contents" rows="3"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="전송"></input>
        </form>
      </article>
    </>
  );
}

function NotFound() {
  return (
    <>
      <div>
        <h2>Not Found</h2>
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
    </>
  );
}

// 라우터 처리를 위한 BrowserRouter 컴포넌트는 App 컴포넌트를 감싸는 형식으로 사용한다.
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* 첫 진입시에는 게시판의 목록을 렌더링한다. */}
            <Route path="/" element={<List></List>} />
            <Route path="/list" element={<List></List>} />
            <Route path="/view" element={<View></View>} />
            <Route path="/write" element={<Write></Write>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
