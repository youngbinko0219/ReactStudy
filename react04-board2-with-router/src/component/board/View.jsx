import { Link, useParams } from "react-router-dom";

function View(props) {
  /*
  useParams :
  컴포넌트를 라우터 처리할 때 중첩된 구조 내에서 :no와 같이 사용된 파라미터의 값을
  얻어올 수 있는 훅
  */
  var params = useParams();

  // 데이터 배열의 크기만큼 반복하여 조건에 맞는 객체를 찾은 후 반환한다.
  // 빈 객체를 초기값으로 사용했으므로, 배열의 크기인 n만큼 반복하게 된다.
  let vi = props.boardData.reduce((prev, curr) => {
    if (curr.no === Number(params.no)) {
      prev = curr;
    }
    return prev;
  }, {});

  let readNum = Number(params.no);
  let prevNum = 0,
    nextNum = 0;

  if (readNum - 1 === 0) {
    prevNum = -1;
  } else {
    prevNum = Number(params.no) - 1;
  }

  nextNum = readNum + 1;

  let isNextNum = props.boardData.reduce((prev, curr) => {
    if (curr.no === nextNum) {
      prev = true;
    }
    return prev;
  }, false);

  if (!isNextNum) {
    nextNum = readNum;
  }

  const goPrev = () => {
    if (readNum - 1 === 0) {
      prevNum = 1;
      alert("이전 페이지가 없습니다.");
    } else {
      prevNum = Number(params.no) - 1;
    }
    props.navigate("/view/" + prevNum);
  };

  const goNext = () => {
    nextNum = readNum + 1;
    let isNextNum = props.boardData.reduce((prev, curr) => {
      if (curr.no === nextNum) {
        prev = true;
      }
      return prev;
    }, false);
    if (!isNextNum) {
      nextNum = readNum;
      alert("다음페이지가 없습니다.");
    }
    props.navigate("/view/" + nextNum);
  };

  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a>&nbsp;
          <a href="/edit">수정</a>&nbsp;
          <a href="/delete">삭제</a>&nbsp; */}
        <Link to="/list">목록</Link>&nbsp;
        <Link to="/edit">수정</Link>&nbsp;
        <Link to="/write">삭제</Link>&nbsp;
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
              <td>{vi.writer}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{vi.title}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{vi.date}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>{vi.contents}</td>
            </tr>
          </tbody>
        </table>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            goPrev();
          }}
        >
          이전글
        </a>
        &nbsp;
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            goNext();
          }}
        >
          다음글
        </a>
      </article>
    </>
  );
}

export default View;
