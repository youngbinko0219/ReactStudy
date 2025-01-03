import "./App.css";
import { storage } from "./storageConfig";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  // 파이어베이스 스토리리 연결 및 확인
  const storageRef = ref(storage);
  console.log("storageRef", storageRef);

  // ref()를 호출할 때 경로를 두번째 인수로 전달하여 경로 트리에서 하위 위치를 가리키는 참조를 만들 수 있다.
  // 경로 : root/images
  const imagesRef1 = ref(storage, "images");
  // parent 및 root 속성을 사용하여 한단계 상위로 이동하거나 최상위로 이동할 수 있다.
  // ref2의 경로는 root/images/myFile.jpg이고
  // ref3은 root/images가 된다.
  const imagesRef2 = ref(storage, "images/myFile.jpg");
  // 최상위 경로이므로 출력시 아무것도 출력되지 않는다.
  const imagesRef3 = imagesRef2.parent;
  const imagesRef4 = imagesRef2.root;

  // fullpath, name 등의 속성으로 참조를 조사하여 이것을 가리키는 파일을 자세히 파악할 수 있다.
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
          // 파일업로드
          // const ref변수 = ref(스토리지객체, 파일명)
          // uploadBytes(ref변수, 파일객체).then(성공시 콜백 함수)
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
