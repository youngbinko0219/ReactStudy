import { Link } from "react-router-dom";

function Write(props) {
  // state와 관련함수를 상수로 저장
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const nextNo = props.nextNo;
  const setNextNo = props.setNextNo;
  const navigate = props.navigate;
  const nowDate = props.nowDate;

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
        <form
          onSubmit={(event) => {
            // submit 이벤트 차단단
            event.preventDefault();

            // 이벤트 객체의 타겟으로 DOM에 입력된 내용을 얻어옴
            let w = event.target.writer.value;
            let t = event.target.title.value;
            let c = event.target.contents.value;

            // 폼값과 state, 함수의 반환값으로 새롭게 추가할 객체 생성
            let addBoardData = {
              no: nextNo,
              writer: w,
              title: t,
              contents: c,
              date: nowDate(),
            };

            // 복사본을 생성한 후 데이터를 추가
            let copyBoardData = [...boardData];
            copyBoardData.push(addBoardData);
            // state를 업데이트
            setBoardData(copyBoardData);
            setNextNo(nextNo + 1);
            // 모든 작업이 완료되면 목록으로 이동동
            navigate("/list");
          }}
        >
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

export default Write;
