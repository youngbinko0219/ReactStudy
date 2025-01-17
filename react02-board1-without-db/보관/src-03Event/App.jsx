import "./App.css";

// 매개변수props를 통해 전달
function Header(props) {
  console.log("props", props.title);
  return (
    <>
      <header>
        <h2>{props.title}</h2>
      </header>
    </>
  );
}

function Nav(props) {
  return (
    <>
      <nav>
        <a
          href="/"
          onClick={function (event) {
            // <a> 태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다.
            event.preventDefault();
            // 부모가 전달해준 함수를 호출한다.
            props.onChangeMode();
          }}
        >
          글쓰기
        </a>
      </nav>
    </>
  );
}

function Article(props) {
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

function App() {
  // 게시판의 데이터로 사용할 객체형 배열열
  const boardData = [
    {
      no: 1,
      title: "오늘은 리액트 공부하는 날",
      writer: "낙짜쌤",
      date: "2023-01-01",
      contents: "리액트를 뽀개봅시다.",
    },
    {
      no: 2,
      title: "어제는 자바스크립스 공부했어",
      writer: "유겸이",
      date: "2023-03-03",
      contents: "자바스크립트는 할게 너무 많아요",
    },
    {
      no: 3,
      title: "내일은 프로젝트 해야지",
      writer: "개똥이",
      date: "2023-05-05",
      contents: "프로젝트는 뭘 만들어 볼까?",
    },
  ];
  return (
    <>
      <div className="App">
        {/* 문자열은 ""를 통해 porps를 전달한다. */}
        <Header title="게시판-목록(props)"></Header>
        <Nav
          onChangeMode={function () {
            alert("글쓰기 페이지로 이동");
          }}
        ></Nav>
        {/* 변수는 {}를 통해 전달할 수 있다. */}
        {/* 자식 컴포넌트에서 데이터를 전달할 수 있도록 매개변수가 있는 함수를 props로 전달 */}
        <Article
          boardData={boardData}
          onChangeMode={(no) => {
            alert("선택한 게시물 번호:" + no);
          }}
        ></Article>
      </div>
    </>
  );
}

export default App;
