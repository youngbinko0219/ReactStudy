import "react";

function NavView(props) {
  // 띄어쓰기를 할 때는 &nbsp; 혹은 {" "}를 사용할 수 있다.
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("list");
        }}
      >
        목록
      </a>
      &nbsp;
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("edit");
        }}
      >
        수정
      </a>{" "}
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          if (window.confirm("삭제할까요?")) {
            props.onChangeMode("delete");
          }
        }}
      >
        삭제
      </a>
    </nav>
  );
}

export default NavView;
