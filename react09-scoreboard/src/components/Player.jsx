import React, { useState } from "react";
import Counter from "./Counter";
import EditPlayerForm from "./EditPlayerForm";

export default function Player(props) {
  let row = props.playerData;

  const [showEdit, setShowEdit] = useState(false);
  let editForm;

  if (showEdit === false) {
    editForm = "";
  } else {
    editForm = (
      <EditPlayerForm
        playerName={row.name}
        playerIdx={row.idx}
        onEditPlayer={props.onEditPlayer}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
    );
  }

  return (
    <>
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => {
              if (window.confirm("삭제할까요?")) {
                props.onDeletePlayer(row.idx);
              }
            }}
          >
            x
          </button>
          <a href="/" onClick={(e) => {
            e.preventDefault()
            setShowEdit(!showEdit)
          }}>{row.name}</a>
        </span>
        {/* 
        App 컴포넌트에서 전달받은 함수를 자식 컴포넌트로 다시 전달
        리액트는 Top-down 방식으로 데이터를 전달하는 구조를 가지고 있으므로 컴포넌트의 구조가
        복잡해질수록 상태관리가 어려워진다는 단점이 있다.
        */}
        <Counter
          idx={row.idx}
          score={row.score}
          onChangeScore={props.onChangeScore}
        />
      </div>
      {editForm}
    </>
  );
}
