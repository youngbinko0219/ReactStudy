import "react";

// 매개변수 props로 값을 받아서 출력한다.
const CompProps2 = (props) => {
  return (
    <div>
      <h4>props2 컴포넌트</h4>
      {props.propData2} <br />
      myNumber : {props.myNumber}
    </div>
  );
};

export default CompProps2;
