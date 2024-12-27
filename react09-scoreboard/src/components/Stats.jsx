import React from "react";

export default function Stats(props) {
  let playersCount = props.playerData.length;

  // 점수의 총합
  // prev의 초기값은 0으로 설정 후 curr의 점수를 누적해서 더해줌
  let totalPoint = props.playerData.reduce((prev, curr) => {
    console.log(curr.name + "점수", curr.score);
    prev += curr.score;
    return prev;
  }, 0);
  return (
    <>
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{playersCount}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoint}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
