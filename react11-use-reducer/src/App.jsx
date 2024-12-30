import { useReducer, useState } from "react";
import "./App.css";

// 학생 컴포넌트
// 컴포넌트에서 매개변수를 정의하는 2가지 방법
// 1. props라는 대표 매개변수를 사용한다.
//  이 때는 2개 이상의 인수를 객체 형태로 받게 되므로 props.인수명으로 사용한다.
// 2. 인수를 개별 변수로 전달받는다.
//  {매개변수1, 매개변수2,...매개변수n}
const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <>
    {/* 학생이름 클릭시 출석 기능이 토글됨 */}
      <div>
        <span
          style={{
            textDecoration: isHere ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch({ type: "mark", param: { id } });
          }}
        >
          {name}
        </span>
        <button
          onClick={() => {
            if (window.confirm("삭제할까요?")) {
              dispatch({ type: "delete", param: { id } });
            }
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
};

// 리듀서 함수 선언
// 이전 state값과 action을 매개변수로 정의
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      // 학생이름을 파라미터를 통해 받기
      const name = action.param.name;
      // 새로운 학생 객체 생성
      const newStudent = {
        id: Date.now(),
        name, // 이름은 key와 value가 동일하므로 하나만 작성
        isHere: false, // 출석여부
      };
      return {
        // 학생수 증가
        count: state.count + 1,
        // 스프레드 연산자로 기존 배열에 새로운 객체 추가
        students: [...state.students, newStudent],
      };
    case "delete":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.param.id
        ),
      };
    case "mark":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.param.id
            ? { ...student, isHere: !student.isHere }
            : student
        ),
      };
    default:
  }
};

// 앱에서 사용할 데이터 객체
// 학생수와 학생의 정보를 담은 배열로 정의
const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: "김철수",
      isHere: false,
    },
  ],
};

function App() {
  // 추가할 학생의 이름
  const [name, setName] = useState("");
  // 리듀서 변수 생성
  // studentInfo는 initialState를 초기값으로 설정
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>총학생수 : {studentInfo.count}</p>
      {/* 추가할 학생의 이름을 입력하기 위한 상자 */}
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {/* 버튼을 누르면 dispatch를 통해 Action객체를 리듀서로 전달하여 학생을 추가한다. */}
      <button
        onClick={() => {
          dispatch({ type: "add", param: { name } });
        }}
      >
        추가
      </button>
      {/* 데이터에 입려된 학생 수 만큼 반복하여 <Student>에 추가 */}
      {studentInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </>
  );
}
export default App;
