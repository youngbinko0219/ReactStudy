import { useEffect, useState } from "react";
import "./App.css";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "./firestoreConfig";

function App() {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const getCollection = async () => {
      let trArray = [];
      const querySnapshot = await getDocs(collection(firestore, "members"));
      querySnapshot.forEach((doc) => {
        let memberInfo = doc.data();
        trArray.push(
          <option key={doc.id} value={doc.id}>
            {memberInfo.name}
          </option>
        );
      });
      return trArray;
    };
    getCollection().then((result) => {
      console.log("result", result);
      setShowData(result);
    });
  }, []);

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <h2>Firebase - Firestore 연동 app</h2>
      <h3>개별 조회 및 삭제하기</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          // 삭제할 아이디 확인
          let id = event.target.id.value;
          console.log("삭제", id);
          if (id === "") {
            alert("사용자를 먼저 선택해주세요");
            return;
          }

          // 선택한 아이디를 폼에 채운 후 submit 하면 deleteDoc을 통해 도큐먼트 삭제
          await deleteDoc(doc(firestore, "members", event.target.id.value));
          // 삭제가 완료되면 입력폼을 비움
          setId("");
          setPass("");
          setName("");
        }}
      >
        <div class="input-group" id="myForm">
          <select
            className="form-control"
            onChange={async (e) => {
              // 특정 아이디를 선택하면 <input>에 내용 설정
              let user_id = e.target.value;
              const docRef = doc(firestore, "members", user_id);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                let callData = docSnap.data();
                setId(user_id);
                setPass(callData.pass);
                setName(callData.name);
              } else {
                console.log("no such document");
              }
            }}
          >
            <option value="">선택하세요</option>
            {showData}
          </select>
          <button type="submit" className="btn btn-danger">
            삭제
          </button>
        </div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>컬렉션(테이블)</td>
              <td>
                <input
                  type="text"
                  name="collection"
                  value="members"
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th>아이디(변경불가)</th>
              <td>
                <input
                  type="text"
                  name="id"
                  value={id}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input
                  type="text"
                  name="pass"
                  value={pass}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
export default App;
