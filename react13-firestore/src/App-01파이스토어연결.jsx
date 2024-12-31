import "./App.css";
import { firestore } from "./firestoreConfig";
// 새로운 문서를 입력하거나 읽을 때 사용하는 함수 임포트
import { doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const addMessage = async () => {
    // 컬렉션 : 테이블과 비슷. Korea로 작성
    // 도규면트 : 레코드와 비슷. Seoul로 작성
    // 하위 데이터는 json 객체 형식으로 작성하면 된다.
    // 테이블처럼 정형화된 것이 아니므로 원하는대로 객체에 정보를 추가할 수 있다.
    // doc()으로 도큐먼트를 만든 후 하위에 데이터를 입력한다.
    await setDoc(doc(firestore, "Korea", "Seoul"), {
      gu: "금천구",
      dong: "가산동",
      hotplace: "KOSMO",
    });
  };

  const getMessage = async () => {
    // 입력한 컬렉션과 도큐먼트를 통해 문서의 참조를 가져온다.
    const docRef = doc(firestore, "Korea", "Seoul");
    // 참조를 통해 도큐면트를 얻어온다.
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // 해당 도큐먼트가 존재하면 콘솔에 내용출력
      console.log("document data:", docSnap.data());
    } else {
      console.log("no such document");
    }
  };

  return (
    <>
      <h2>Firebase - Firestore 연동 app</h2>
      <h3>Firebase 연결</h3>
      <input type="button" value="입력" onClick={addMessage} />
      <input type="button" value="읽기" onClick={getMessage} />
    </>
  );
}

export default App;
