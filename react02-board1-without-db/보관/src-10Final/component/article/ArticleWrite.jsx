import "react";
/*
작성시 입력값이 없어도 등록이 되는 문제가 있으므로
빈 값을 검증한 후 모든 값이 입력되었을 대만 등록이 되도록 수정하시오.
*/

function ArticleWrite(props) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          let title = event.target.title.value.trim();
          let writer = event.target.writer.value.trim();
          let contents = event.target.contents.value.trim();

          if (!title) {
            alert("제목 입력값을 작성해야 합니다.");
            return;
          }
          if (!writer) {
            alert("작성자 입력값을 작성해야 합니다.");
            return;
          }
          if (!contents) {
            alert("내용 입력값을 작성해야 합니다.");
            return;
          }

          props.writeAction(title, writer, contents);
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
  );
}

export default ArticleWrite;
