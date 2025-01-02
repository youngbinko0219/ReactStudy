import { useEffect, useState } from "react";
import "./App.css";
import { storage } from "./storageConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function App() {
  const listRef = ref(storage, "");

  useEffect(() => {
    let fileRows = [];
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("folder", folderRef);
        });
        res.items.forEach((itemRef) => {
          console.log("filename", itemRef.name);

          getDownloadURL(ref(storage, itemRef.name))
            .then((url) => {
              console.log("file URL download");
              const img = document.getElementById(`img_${itemRef.name}`);
              img.setAttribute("src", url);
              img.setAttribute("width", 200);
            })
            .catch((error) => {
              console.log("이미지 다운로드 중 에러", error);
            });
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td>
                <img id={`img_${itemRef.name}`} alt="" />
              </td>
            </tr>
          );
        });
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log("파일 목록 출력중 에러 발생", error);
      });
  }, []);

  const [fileLists, setFileLists] = useState([]);
  console.log("rendering");

  return (
    <>
      <h2>firebase - storage app</h2>
      <h3>파일 목록 및 이미지 다운로드</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullPath</th>
            <th>name</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>{fileLists}</tbody>
      </table>
    </>
  );
}

export default App;
