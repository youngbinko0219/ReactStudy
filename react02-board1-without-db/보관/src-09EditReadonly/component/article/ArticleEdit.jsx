import "react";

/*
수정 페이지를 구성하기 위해 기존 데이터를 props로 전달받아 <input>의 밸류 속성값으로
설정한다. 하지만 이 경우 <input>이 readOnly 속성으로 렌더링되어 기존의 내용을 수정할 수
없게 된다. react에서 props는 외부에서 내부로 전달되는 일종의 파라미터이므로 애초에 읽기전용으로
설정되어있기 때문이다.
*/

function ArticleEdit(props) {
  return (
    <>
      <article>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let title = event.target.title.value;
            let writer = event.target.writer.value;
            let contents = event.target.contents.value;
            props.editAction(title, writer, contents);
          }}
        >
          <table id="boardTable">
            <tbody>
              <tr>
                <th>작성자</th>
                <td>
                  <input
                    type="text"
                    name="writer"
                    value={props.selectRow.writer}
                  />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={props.selectRow.title}
                  />
                </td>
              </tr>
              <tr>
                <th>내용</th>
                {/* HTML에서는 <textarea>에 밸류 속성을 사용하지 않지만 JSX에서는 <input>과
                동일하게  */}
                <td>
                  <textarea
                    name="contents"
                    cols="22"
                    rows="3"
                    value={props.selectRow.contents}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="수정하기" />
        </form>
      </article>
    </>
  );
}

export default ArticleEdit;
