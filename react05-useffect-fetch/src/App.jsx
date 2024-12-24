import { useEffect, useState } from "react";
import "./App.css";

function MyCommunication(props) {
  /*
  외부서버의 api를 얻어오기 위해 state를 생성한다.
  초기값은 json의 포맷에 따라 달라질 수 있으므로 확인 후 설정한다.
  */
  var [myJSON, setMyJSON] = useState({ results: [] });

  // 해당 ui로 렌더링이 끝난 후 api의 정보를 얻어온다.
  useEffect(function () {
    fetch("https://api.randomuser.me?results=10")
      .then((result) => {
        //console.log(result);
        return result.json();
      })
      .then((json) => {
        console.log(json);
        setMyJSON(json);
      });

    return () => {
      console.log("#Life", "useEffect 실행==>컴포넌트 언마운트");
    };
  }, []);
  /*
  두번째 인자인 의존성 배열에 빈 배열을 설정했으므로, 최초 한번만 실행된다.
  이 부분의 설정이 없으면 무한루프에 빠지게 된다.
  */

  let trTag = [];
  for (let i = 0; i < myJSON.results.length; i++) {
    let data = myJSON.results[i];
    //console.log(data);
    trTag.push(
      <tr key={data.login.md5}>
        <td>
          <img src={data.picture.thumbnail} alt={data.login.username} />
        </td>
        <td>
          <a
            href="/"
            onClick={(e) => {
              // 아이디를 클릭하면 props로 전달된 함수를 통해 현재 루프의 객체를 그대로 인자로
              // 전달한다.
              e.preventDefault();
              props.onProfile(data);
            }}
          >
            {data.login.username}
          </a>
        </td>
        <td>
          {data.name.title} {data.name.first} {data.name.last}
        </td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
      </tr>
    );
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>사진</th>
            <th>로그인</th>
            <th>이름</th>
            <th>국가</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <>
      <h2>React - 외부 서버 통신</h2>
      {/* 링크를 클릭하면 정보를 파싱한 문자열을 alert으로 출력한다. */}
      <MyCommunication
        onProfile={(sData) => {
          console.log(sData);
          // 정보 출력을 위한 문자열은 백틱기호를 이용해서 + 기호없이 연결할 수 있다.
          let info = `전화번호:${sData.cell} 
          성별:${sData.gender} 
          username:${sData.login.username} 
          password:${sData.login.password}`;
          alert(info);
        }}
      ></MyCommunication>
    </>
  );
}

export default App;
