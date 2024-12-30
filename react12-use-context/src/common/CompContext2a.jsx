import { useContext } from "react";
import { SimpleContext } from "../context/SimpleContext";

const CompContext2a = () => {
  // useContext 변수 생성
  // 이 때 임포트할 파일을 인수로 전달
  const contextData = useContext(SimpleContext);
  return (
    <div>
      <h4>context2a 컴포넌트</h4>
      {contextData}
    </div>
  );
};

export default CompContext2a;
