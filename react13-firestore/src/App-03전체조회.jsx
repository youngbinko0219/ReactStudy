import { useState } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firestoreConfig";

function App() {
  // 데이터를 저장할 state 정의
  // 초기값은 빈 배열
  const [showData, setShowData] = useState([]);

  const getCollection = async () => {
    let trArray = [];
    // 컬렉션 이름으로 지정된 하위 문서를 얻어온다.
    const querySnapshot = await getDocs(collection(firestore, "members"));
    // 문서의 갯수만큼 반속해서 <tr>태그를 추가한다.
    querySnapshot.forEach((doc) => {
      let memberInfo = doc.data();
      trArray.push(
        <tr key={doc.id}>
          <td className="cen">{doc.id}</td>
          <td className="cen">{memberInfo.pass}</td>
          <td className="cen">{memberInfo.name}</td>
          <td className="cen">{memberInfo.regdate}</td>
        </tr>
      );
    });
    // 파싱된 데이터를 통해 state를 변경하고 새롭게 렌더링한다.
    setShowData(trArray);
  };

  return (
    <>
      <h2>Firebase - Firestore 연동 app</h2>
      <h3>전체조회하기</h3>
      <button type="button" onClick={getCollection}>
        전체조회
      </button>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>아이디</th>
            <th>비밀번호</th>
            <th>이름</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    </>
  );
}
export default App;
