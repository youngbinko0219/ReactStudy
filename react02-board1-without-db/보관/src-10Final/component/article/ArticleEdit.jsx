import "react"
import { useState } from "react";

/*
수정 페이지를 구성하기 위해 기존 데이터를 props로 전달받아 <input>의 밸류 속성값으로
설정한다. 하지만 이 경우 <input>이 readOnly 속성으로 렌더링되어 기존의 내용을 수정할 수
없게 된다. react에서 props는 외부에서 내부로 전달되는 일종의 파라미터이므로 애초에 읽기전용으로
설정되어있기 때문이다.
*/

/*
위와 같은 문제로 props를 state에 저장한 후 onchange 이벤트 핸들러를 통해 설정된
내용을 수정할 수 있도록 변경해야한다.
*/
function ArticleEdit(props) {
  /*
  <input>의 갯수만큼 state를 생성한다. props로 전달된 데이터를 각 state에 저장한 후 변환
  함수까지 정의한다. 이렇게 하면 props는 그 값을 동일하게 유지하게 되고, 복사본인 state만
  변경되는 구조가 된다.
  */
  const [title, setTitle] = useState(props.selectRow.title)
  const [writer, setWriter] = useState(props.selectRow.writer)
  const [contents, setContents] = useState(props.selectRow.contents)
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
                {/* 밸류 속성값은 state로 정의한 값을 설정한다.
                해당 <input>에서 발생되는 이벤트를 통해 입력값을 변경한다. */}
                <td>
                  <input
                    type="text"
                    name="writer"
                    value={writer}
                    onChange={(event)=>{
                      setWriter(event.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event)=>{
                      setTitle(event.target.value)
                    }}
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
                    value={contents}
                    onChange={(event)=>{
                      setContents(event.target.value)
                    }}
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
