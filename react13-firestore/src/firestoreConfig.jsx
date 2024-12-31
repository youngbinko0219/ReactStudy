// 파이어베이스 서비스에 연결하기 위한 임포트
import { initializeApp } from "firebase/app";
// 파이어스토어 데이터베이스를 사용하기 위한 임포트
import { getFirestore } from "firebase/firestore";

// .env 파일 생성 전
// 파이어베이스에서 제공받은 API정보
// const firebaseConfig = {
//   apiKey: "AIzaSyAgM73k1TQpOQAnVIcU9RzVmMNdq-LEYXM",
//   authDomain: "myreactapp-60a3c.firebaseapp.com",
//   projectId: "myreactapp-60a3c",
//   storageBucket: "myreactapp-60a3c.firebasestorage.app",
//   messagingSenderId: "803976843490",
//   appId: "1:803976843490:web:8c9106df2422c825bb8ebb",
// };

// .env 파일 생성 후
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// 파이어베이스에 연결한 후 앱 초기화
const app = initializeApp(firebaseConfig);
// 파이어스토어 사용을 위한 객체 생성
const firestore = getFirestore(app);
export { firestore };
