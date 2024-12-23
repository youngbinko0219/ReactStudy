import { Link } from "react-router-dom";
import "react";

function List(props) {
  /*
  App 컴포넌트에서 props를 통해 전달한 배열 데이터를 맵 함수를 통해 반복해서
  목록을 생성한다.
  */
  const lists = props.boardData.map((row) => {
    return (
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        {/* 열람으로 이동하기 위한 링크는 /view/일련번호 */}
        <td>
          <Link to={"/view/" + row.no}>{row.title}</Link>
        </td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  });

  return (
    <>
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
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
          <tbody>{lists}</tbody>
        </table>
      </article>
    </>
  );
}

export default List;
