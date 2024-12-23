import "react";

function NavEdit(props) {
  return (
    <nav>
      {/* 수정은 열람에서 진입하게 되므로 '뒤로'는 열람으로 전환 */}
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onBack();
        }}
      >
        뒤로
      </a>&nbsp;
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode();
        }}
      >
        목록
      </a>
    </nav>
  );
}

export default NavEdit;
