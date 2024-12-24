import { useEffect, useState } from "react";
import "./App.css";

// 목록을 출력하는 컴포넌트
const GlobalTop = (props) => {
  console.log("#Life", "GlobalTop==>1. 컴포넌트 실행");

  // 빈 배열로 state를 선언. 초기값은 빈 배열로 설정.
  var [myList, setMyList] = useState([]);

  // return 문이 실행된 후, 즉 렌더링이 완료된 후 실행되는 훅
  useEffect(function () {
    console.log("#Life", "LifeGood==>3. useEffect 실행1");
    // JSON 가져오기
    // 컴포넌트의 렌더링이 완료된 후 내부에 있는 json파일을 get방식으로 요청한다.
    fetch("./json/myData.json")
      .then((result) => {
        // 요청에 성공하면 json파일의 데이터가 매개변수로 콜백된다.
        // 콜백 데이터는 text 형식이므로 json 포맷으로 변환 후 사용한다.
        return result.json();
      })
      .then((json) => {
        // 첫번째 then절에서 반환한 값은 두번째 then 절로 반환된다.
        // 이 값을 받은 후 state로 변경한다.
        console.log(json);
        setMyList(json);
      });

    return () => {
      console.log("#Life", "LifeGood==>4. useEffect 실행2");
    };
  }, []);

  /*
  useEffect의 두번째 인자인 의존성배열에 빈 배열을 추가한다.
  이렇게 하면 최초 한번만 실행되고 그 이상 실행되지 않는다.
  빈 배열이 없어지면 렌더링이 될 때마다 지속적으로 호출된다. => 무한 렌더링이 된다.
  */

  var listTag = [];
  // state 변수의 크기만큼 반복.
  // 최초 실행시에는 빈 배열이므로 이 부분은 실행되지 않는다.
  for (var i = 0; i < myList.length; i++) {
    // 각 루프에 해당하는 객체를 인출
    var data = myList[i];
    console.log("데이터", data.id, data.num);
    listTag.push(
      <li key={data.id}>
        {/* data-id 속성에 설정된 값은 Event 객체의 target 속성 하위의 dataset.id를 통해
        얻어올 수 있다. 이 부분에 게시물의 일련번호인 num을 설정하고 있다. */}
        <a
          href={data.id}
          data-id={data.num}
          onClick={(e) => {
            e.preventDefault();
            // 여기서 게시물의 일련번호를 부모 컴포넌트에 전달.
            props.myLinkClick(e.target.dataset.id);
          }}
        >
          {data.id}
        </a>
      </li>
    );
  }

  console.log("#Life", "LifeGood==>2.return 실행(render와 동일)");
  return (
    <nav>
      <ul>{listTag}</ul>
    </nav>
  );
};

// props로 전달된 객체의 값을 화면에 출력하는 컴포넌트
const ContentBody = (props) => {
  return (
    <div>
      <h2>{props.myResult.name}</h2>
      <ul>
        <li>num : {props.myResult.num}</li>
        <li>id : {props.myResult.id}</li>
        <li>cell : {props.myResult.cell}</li>
        <li>description : {props.myResult.description}</li>
      </ul>
    </div>
  );
};

function App() {
  // dto.json의 내용을 저장할 state이므로 초기값은 빈 객체로 생성
  var [myResult, setMyResult] = useState({});

  return (
    <>
      <h2>React - 내부서버통신</h2>
      {/* 클릭시 내부에 저장된 dto.json 파일을 get방식으로 요청한 후 콜백 데이터를 받아오는
      기능의 함수를 props로 전달한다. 자식 컴포넌트는 이 함수를 호출할 때 게시물의 일련번호를
      전달한다. */}
      <GlobalTop
        myLinkClick={(num) => {
          console.log("클릭", num);
          fetch("./json/dto" + num + ".json")
            .then((result) => {
              return result.json();
            })
            .then((json) => {
              console.log("결과", json);
              // json 파일의 내용을 통해 state를 변경하여 새롭게 렌더링한다.
              setMyResult(json);
            });
        }}
      />
      <ContentBody myResult={myResult} />
    </>
  );
}

export default App;
