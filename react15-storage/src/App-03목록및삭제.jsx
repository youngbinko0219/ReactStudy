import { useState } from "react";
import "./App.css";
import { storage } from "./storageConfig";
import { ref, listAll, deleteObject } from "firebase/storage";
import { useEffect } from "react";

function App() {
  // 스토리지 연결 및 root 경로의 참조 생성
  const listRef = ref(storage, "");

  // 파일 목록 저장을 위한 state
  const [fileLists, setFileLists] = useState([]);
  // 삭제 후 전체 렌더링을 위한 state
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    let fileRows = [];
    // 생성된 참조에서 모든 폴더와 파일명 인출
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("folder", folderRef);
        });
        // 파일명의 갯수만큼 반복해서 목록생성
        res.items.forEach((itemRef) => {
          const deleteRef = ref(storage, itemRef.fullPath);

          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => {
                    if (window.confirm("삭제할까요?")) {
                      // 삭제할 파일의 참조를 통해 파일 삭제
                      deleteObject(deleteRef)
                        .then(() => {
                          console.log("파일 삭제 성공");
                          // 성공시에는 화면의 새로운 렌더링
                          setRenderFlag(!renderFlag);
                        })
                        .catch((error) => {
                          console.log("파일 삭제 실패");
                        });
                    }
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        });
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log("에러발생", error);
      });
  }, [renderFlag]);
  // 파일 삭제시 renderFlag가 변경되므로
  // 그 때마다 useEffect()가 재실행되는 구조로 되어있다.

  console.log("렌더링");

  return (
    <>
      <h2>Firebase - storage app</h2>
      <h3>파일 목록 및 삭제</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullpath</th>
            <th>name</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>{fileLists}</tbody>
      </table>
    </>
  );
}

export default App;
