import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import Player from "./components/Player";

function App() {
  // 데이터로 사용할 객체형 배열 생성
  const [playerData, setPlayerData] = useState([
    { idx: 1, name: "홍길동", score: 10 },
    { idx: 2, name: "손오공", score: 20 },
    { idx: 3, name: "유비", score: 30 },
    { idx: 4, name: "달타냥", score: 40 },
  ]);
  // 시퀀스로 사용할 state생성
  const [nextVal, setNextVal] = useState(5);

  // 플레이어 추가를 위한 함수
  const addPlayerProcess = (pName) => {
    // 이름만 매개변수로 받은 후 추가할 객체 생성
    console.log("onAddPlayer", pName);
    let addPlayer = { idx: nextVal, name: pName, score: 0 };

    // 데이터의 복사본 생성
    let copyPlayers = [...playerData];
    // 복사본에 데이터 추가
    copyPlayers.push(addPlayer);
    // state를 변경하면 새롭게 렌더링
    setPlayerData(copyPlayers);
    // 새로운 플레이어 추가를 위해 시퀀스 증가
    setNextVal(nextVal + 1);
  };

  // 점수의 증감
  // 매개변수는 증감, 플레이어의 일련번호로 정의
  const scoreChangeProcess = (flag, playerIdx) => {
    console.log("idx", playerIdx, "flag", flag);
    // 복사본 생성
    let copyPlayers = [...playerData];
    // 복사본을 통해 루프
    copyPlayers.forEach((row) => {
      // 현재 루프의 객체에서 일련번호와 수정할 플레이어의 일련번호 확인
      if (row.idx === playerIdx) {
        console.log(row.name);
        // flag에 따라 +일 때 5점 추가 -일 때 5점 감소
        if (flag === "+") {
          row.score += 5;
        } else {
          if (row.score - 5 < 0) {
            alert(`${row.name}의 점수는 0점보다 낮을 수 없습니다.`);
            row.score = 0;
          } else {
            row.score -= 5;
          }
        }
      }
    });
    // 복사본을 통해 state 변경
    setPlayerData(copyPlayers);
  };

  const deletePlayerProcess = (playerIdx) => {
    console.log("deleteIdx", playerIdx);

    let newPlayerData = playerData.reduce((prev, curr) => {
      if (curr.idx !== playerIdx) {
        prev.push(curr);
      }
      return prev;
    }, []);
    setPlayerData(newPlayerData);
  };

  const editPlayerProcess = (idx, name) => {
    console.log("edit", idx, name);
    let newPlayersData = playerData.filter((row) => {
      if (row.idx === idx) {
        row.name = name;
      }
      return row;
    });
    setPlayerData(newPlayersData);
  };

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playersData={playerData} />
      {/* 점수 변경을 위한 함수를 props로 전달 */}
      {playerData.map((playerRow) => (
        <Player
          playerData={playerRow}
          onChangeScore={scoreChangeProcess}
          onDeletePlayer={deletePlayerProcess}
          onEditPlayer={editPlayerProcess}
        />
      ))}
      <AddPlayerForm onAddPlayer={addPlayerProcess}></AddPlayerForm>
    </div>
  );
}

export default App;
