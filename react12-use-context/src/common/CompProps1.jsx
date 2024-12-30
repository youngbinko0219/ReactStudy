import CompState2 from "./CompProps2";

// 부모에서 전달된 props를 {}를 이용해서 이름 그대로 전달받는다.
const CompProps1 = ({ propData, myNumber }) => {
  return (
    <div>
      <h4>props1 컴포넌트</h4>
      {propData}
      {/* props를 통해 하위 컴포넌트로 다시 전달한다. */}
      <CompState2 propData2={propData} myNumber={myNumber} />
    </div>
  );
};

export default CompProps1;
