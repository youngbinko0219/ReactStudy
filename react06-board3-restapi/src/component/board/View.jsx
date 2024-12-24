import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function View(props) {
  let params = useParams();
  console.log("idx", params.idx);

  let [boardData, setBoardData] = useState({});
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=nboard_news&idx=" + params.idx;

  useEffect(function () {
    fetch(requestUrl + "?" + parameter)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        setBoardData(json);
      });

    return () => {
      console.log("useEffect 실행==>컴포넌트 언마운트");
    };
  }, []);

  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
        <Link to="/list">목록</Link>
        <Link to="/edit">수정</Link>
        <Link to="/delete">삭제</Link>
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
              <td>{boardData.name}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{boardData.subject}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{boardData.regdate}</td>
            </tr>
            <tr>
              <th>내용</th>
              {/* HTML 태그가 그대로 출력됨 */}
              {/* <td>{boardData.content}</td> */}
              {/* 마크업이 적용된 상태로 출력됨 */}
              <td dangerouslySetInnerHTML={{ __html: boardData.content }}></td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default View;
