import "react";

function ArticleList(props) {
  const lists = [];
  // props로 전달된 객체형 배열의 크기만큼 반복
  for (let i = 0; i < props.boardData.length; i++) {
    // 각 루프에 해당하는 객체를 꺼넨 후 lists에 추가
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        {/* 제목을 클릭하면 열람으로 전환. "read/번호"형식으로 링크 작성 */}
        <td>
          <a
            href={"/read/" + row.no}
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(row.no);
            }}
          >
            {row.title}
          </a>
        </td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return (
    <>
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

export default ArticleList;
