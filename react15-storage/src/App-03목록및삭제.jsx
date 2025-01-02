import { useState } from "react";
import "./App.css";
import { storage } from "./storageConfig";
import { ref, listAll, deleteObject } from "firebase/storage";
import { useEffect } from "react";

function App() {
  const listRef = ref(storage, "");

  const [fileLists, setFileLists] = useState([]);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    let fileRows = [];
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("folder", folderRef);
        });
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
                      deleteObject(deleteRef)
                        .then(() => {
                          console.log("파일 삭제 성공");
                          setRendering(!renderFlag);
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
