import "./App.css";
// State 사용을 위한 리액트 훅 임포트
import { useState } from "react";

import NavList from "./component/navigation/NavList";
import NavView from "./component/navigation/NavView";
import NavWrite from "./component/navigation/NavWrite";
import ArticleList from "./component/article/ArticleList";
import ArticleView from "./component/article/ArticleView";
import ArticleWrite from "./component/article/ArticleWrite";

function ReadyComp() {
  return (
    <>
      <div>
        <h3>컴포넌트 준비중입니다.</h3>
        <a href="/">Home 바로가기</a>
      </div>
    </>
  );
}

// 매개변수 props를 통해 전달받아 사용
// 모든 페이지에서 공통적으로 사용하는 컴포넌트(타이틀만 변경)
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

function App() {
  // 게시판의 데이터로 사용할 객체형 배열
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
  // 화면 전환을 위한 state 생성. 변수명은 mode, 초기값은 list, 변경시 사용할 함수는
  // setMode()로 지정
  const [mode, setMode] = useState("list");

  // 컴포넌트와 타이틀을 보관할 변수
  let articleComp, navComp, titleVar;
  if (mode === "list") {
    titleVar = "게시판-목록(props)";
    navComp = (
      <NavList
        onChangeMode={() => {
          setMode("write");
        }}
      ></NavList>
    );
    articleComp = (
      <ArticleList
        boardData={boardData}
        onChangeMode={(no) => {
          console.log("선택한 게시물 번호:" + no);
          setMode("view");
        }}
      ></ArticleList>
    );
  } else if (mode === "view") {
    titleVar = "게시판-읽기(props)";
    navComp = (
      <NavView
        onChangeMode={(pmode) => {
          setMode(pmode);
        }}
      ></NavView>
    );
    articleComp = <ArticleView></ArticleView>;
  } else if (mode === "write") {
    titleVar = "게시판-쓰기(props)";
    navComp = (
      <NavWrite
        onChangeMode={() => {
          setMode("list");
        }}
      ></NavWrite>
    );
    articleComp = <ArticleWrite></ArticleWrite>;
  } else {
    navComp = <ReadyComp></ReadyComp>;
    articleComp = "";
  }

  // mode 변화에 따른 컴포넌트를 렌더링
  return (
    <>
      <div className="App">
        {/* 문자열은 ""를 통해 props를 전달한다. */}
        <Header title={titleVar}></Header>
        {navComp}
        {articleComp}
      </div>
    </>
  );
}

export default App;
