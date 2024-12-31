// 파이어베이스 서비스에 연결하기 위한 임포트
import { initializeApp } from "firebase/app";
// 파이어스토어 데이터베이스를 사용하기 위한 임포트
import { getDatabase } from "firebase/firestore";

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
const realtime = getDatabase(app);
export { realtime };
