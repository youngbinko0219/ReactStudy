import "./App.css";
import { storage } from "./storageConfig";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const storageRef = ref(storage);
  console.log("storageRef", storageRef);

  const imagesRef1 = ref(storage, "images");
  const imagesRef2 = ref(storage, "images/myFile.jpg");
  const imagesRef3 = imagesRef2.parent;
  const imagesRef4 = imagesRef2.root;

  console.log("ref 객체", imagesRef1);
  console.log("경로 1", imagesRef1.fullPath);
  console.log("경로 2", imagesRef2.fullPath, imagesRef2.name);
  console.log("경로 3", imagesRef3.fullPath);
  console.log("경로 4", imagesRef4.fullPath);

  return (
    <>
      <h2>Firebase - Storage app</h2>
      <h3>스토리지 접속 및 파일 업로드</h3>
      <p>파일을 선택하면 즉시 업로드 됩니다.</p>
      <input
        type="file"
        name="myfile"
        onChange={(e) => {
          console.log("file 프로퍼티", e.target.files);
          const imageRef = ref(storage, e.target.files[0].name);
          uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
            console.log("업로드성공", snapshot);
          });
        }}
      />
    </>
  );
}

export default App;
