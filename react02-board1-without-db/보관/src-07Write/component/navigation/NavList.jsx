import "react";

function NavList(props) {
    return (
      <>
        <nav>
          <a
            href="#"
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

export default NavList;