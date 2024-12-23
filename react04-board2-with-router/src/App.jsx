import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import List from "./component/board/List";
import Write from "./component/board/Write";
import View from "./component/board/View";
import NotFound from "./component/common/NotFound";
import Edit from "./component/board/Edit";

const nowDate = () => {
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + (1 + dateObj.getMonth())).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
};

function App() {
  // 데이터로 사용할 객체형 배열 생성
  // 작성 처리를 위해 기존 배열을 state로 변경
  const [boardData, setBoardData] = useState([
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
  ]);

  // 시퀀스용 state 생성. 초기값은 4로 설정
  const [nextNo, setNextNo] = useState(4);
  const navigate = useNavigate();

  return (
    <>
      {/* 라우터 처리를 위한 브라우저라우터 컴포넌트는 main.jsx로 이동 */}
      <div className="App">
        <Routes>
          <Route path="/" element={<List boardData={boardData} />} />
          <Route path="/list" element={<List boardData={boardData} />} />
          <Route path="/view">
            <Route
              path=":no"
              element={<View boardData={boardData} navigate={navigate} />}
            />
          </Route>
          {/* Write 컴포넌트 내에서 글쓰기 처리를 할 수 있도록 app 컴포넌트에서 생성한 모든
          state와 관련 함수를 props로 처리한다. */}
          <Route
            path="/write"
            element={
              <Write
                boardData={boardData}
                setBoardData={setBoardData}
                nextNo={nextNo}
                setNextNo={setNextNo}
                navigate={navigate}
                nowDate={nowDate}
              />
            }
          />
          <Route path="/edit">
            <Route
              path=":no"
              element={
                <Edit
                  boardData={boardData}
                  setBoardData={setBoardData}
                  navigate={navigate}
                  nowDate={nowDate}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
