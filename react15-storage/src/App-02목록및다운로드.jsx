import { useEffect, useState } from "react";
import "./App.css";
import { storage } from "./storageConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function App() {
  // 스토리지 연결 및 root 경로로 참조생성
  const listRef = ref(storage, "");

  // 1차 렌더링 완료 후 실행
  useEffect(() => {
    let fileRows = [];
    // 생성된 스토리지 root 경로의 참조를 통해 모든 폴더와 파일명 인출
    listAll(listRef)
      .then((res) => {
        // 폴더명 출력
        res.prefixes.forEach((folderRef) => {
          console.log("folder", folderRef);
        });
        // 파일명 출력
        res.items.forEach((itemRef) => {
          console.log("filename", itemRef.name);

          // 파일의 다운로드 URL을 비동기로 얻어온다.
          getDownloadURL(ref(storage, itemRef.name))
            .then((url) => {
              console.log("file URL download");
              // <img>에 부여된 id를 통해 DOM을 얻어온다.
              const img = document.getElementById(`img_${itemRef.name}`);
              // <img>의 src, width 속성을 부여한다.
              img.setAttribute("src", url);
              img.setAttribute("width", 200);
            })
            .catch((error) => {
              console.log("이미지 다운로드 중 에러", error);
            });
          // 파일의 목록 생성.
          // 최초 생성시에는 <img>에 src 속성이 없음
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
        // 완성된 파일목록을 통해 state 변경
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log("파일 목록 출력중 에러 발생", error);
      });
  }, []);

  // 스토리지에서 얻어온 파일목록을 저장할 state
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
        {/* 1차 렌더링 후 useEffect()에서 얻어온 파일 목록이 출력됨 */}
        <tbody>{fileLists}</tbody>
      </table>
    </>
  );
}

export default App;
