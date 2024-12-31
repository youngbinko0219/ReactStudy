import { setDoc, doc } from "firebase/firestore";
import "./App.css";
import { firestore } from "./firestoreConfig";

function App() {
  console.log("firestore", firestore);

  // 현재날짜를 0000-00-00으로 입력하기 위한 함수
  const nowDate = () => {
    let dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = ("0" + (1 + dateObj.getMonth())).slice(-2);
    var day = ("0" + dateObj.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  };

  // Firestore에 내용 입력
  const memberWrite = async (p_collection, p_id, p_pass, p_name) => {
    // doc()으로 컬렉션과 도큐먼트를 생성 후 setDoc()으로 내용 입력
    await setDoc(doc(firestore, p_collection, p_id), {
      id: p_id,
      pass: p_pass,
      name: p_name,
      regdate: nowDate(),
    });
    console.log("입력성공");
  };

  return (
    <>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>입력하기</h3>
      <form
        onSubmit={(event) => {
          // 이벤트 차단
          event.preventDefault();

          // 입력한 폼 값을 타겟 속성으로 얻어옴
          let collection = event.target.collection.value;
          let id = event.target.id.value;
          let pass = event.target.pass.value;
          let name = event.target.name.value;

          // 입력값이 없는 경우 경고창 띄움
          if (id === "") {
            alert("아이디를 입력하세요");
            return;
          }
          if (pass === "") {
            alert("패스워드를 입력하세요");
            return;
          }
          if (name === "") {
            alert("이름을 입력하세요");
            return;
          }
          // 입력값을 인자로 입력함수 호출
          memberWrite(collection, id, pass, name);

          // 재입력을 위해 input 비움
          event.target.id.value = "";
          event.target.pass.value = "";
          event.target.name.value = "";
        }}
      >
        <table className="table table-bordered table-striped">
          <tr>
            <td>컬렉션(테이블)</td>
            <td>
              <input type="text" name="collection" value="members" />
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="id" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="text" name="pass" />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
        </table>
        <button type="submit">입력</button>
      </form>
    </>
  );
}
export default App;
