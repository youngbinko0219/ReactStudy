import { Link } from "react-router-dom";

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

export default View;
