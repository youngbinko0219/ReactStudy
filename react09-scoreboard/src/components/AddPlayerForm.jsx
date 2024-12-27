import React from "react";

// 컴포넌트의 선언과 동시에 export할 수 있다.
export default function AddPlayerForm(props) {
  return (
    <>
      <form
        className="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          // 이벤트 객체를 통해 입력값 얻어옴
          let playerName = e.target.player.value;
          // 부모에서 전달된 함수를 호출하여 플레이어 추가
          if (!playerName) {
            alert("이름을 입력하세요.");
            return;
          }
          props.onAddPlayer(playerName);
          // 다음에 입력할 플레이어를 위해 비워둠
          e.target.player.value = "";
        }}
      >
        <input
          type="text"
          name="player"
          minLength="10"
          className="input"
          placeholder="이름을 추가하세요"
          required
          onChange={() => {}}
        />
        <input type="submit" className="input" value="Add Player" />
      </form>
    </>
  );
}
