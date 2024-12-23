// 컴포넌트 모듈화를 위해 제일 먼저 필요한 React 임포트(수입) 선언
import "react";

// 함수형 컴포넌트 생성. 파일명과 동일한 이름으로 생성
function ListComponent(props) {
  /*
    컴포넌트에서 실제 표현해야 하는 UI를 return문 내부에 기술한다.
    기존 클래스형 컴포넌트에서는 render()함수가 있었는데, 함수형에서는 return이
    역할을 대신한다.
    */
  return (
    <>
      {/*
    JSX를 통해 UI를 표현할 때 최상위 엘리먼트는 반드시 하나여야한다. 여기서는 3개의
    상위 엘리먼트가 있으므로 프레그먼트로 묶어주면 된다.
    */}
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.changeMode("write");
          }}
        >
          글쓰기
        </a>
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
          <tbody>
            <tr>
              <td className="cen">1</td>
              <td>
                {/* 부모에서 전달된 props를 아래와 같이 호출해서 모드를 뷰로 변경한다. */}
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    props.changeMode("view");
                  }}
                >
                  오늘은 React 공부하는 날
                </a>
              </td>
              <td className="cen">낙짜쌤</td>
              <td className="cen">2030-05-05</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

/*
외부에서 해당 컴포넌트를 임포트 하려면 익스포트 디폴트로 먼저
내보내기를 해야한다.
*/
export default ListComponent;
