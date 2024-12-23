import "react";

function WriteComponent(props) {
  return (
    <>
      <header>
        <h2>게시판-작성</h2>
      </header>
      <nav>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.changeMode("list");
          }}
        >
          목록
        </a>
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
                  <textarea name="contents" cols="22" rows="3"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          {/*
          JSX는 HTML과 유사한 문법을 사용하지만, XML의 문법을 따르므로
          반드시 쌍(pair)을 이뤄야한다. 따라서 <input> 태그도 아래와 같이
          종료 태그를 작성해야한다.
          */}
          <input type="submit" value="전송" />
        </form>
      </article>
    </>
  );
}

export default WriteComponent;
