import "./App.css";
// 리덕스 스토어를 생성하기 위한 패키지 임포트
import { legacy_createStore as createStore } from "redux";
// 리덕스를 관리하기 위해 필요한 provider컴포넌트와 관련 훅에 대한 패키지 임포트트
import { Provider, useSelector, useDispatch } from "react-redux";

// 리덕스(Redux) : 
// 리액트로 제작한 애플리케이션의 상태관리를 위한 라이브러리로 리액트와 함께 사용되지만
// 서드파티로 제공되므로 별도로 설치해야한다.

// 스토어 생성시 주입할 리듀서 함수를 먼저 생성한다.
// 리듀서는 스토어에 있는 state를 변경하기 위한 코드를 실행부로 정의한다.
// 파라미터는 2개가 필요하다.
// currentState : 현재 state값
// action : state 변경에 필요한 요청 파라미터.
//          2개 이상의 값을 전달할 수 있어야 하므로 json 객체를 주로 사용한다.
function reducer(currentState, action) {
  // 최초 state가 정의되지 않은 상태라면 number를 1로 설정한다.
  // 기존 app 에는 최상위 컴포넌트에서 usestate를 통해 state를 생성했지만 redux가 도입되면서
  // store에서 state를 생성 및 관리한다.
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  // 현재 state의 복사본을 스프레드 연산자를 이용해서 생성
  const newState = { ...currentState };

  // 요청(action)을 분석한 후 상태(state)를 변경경
  if (action.type === "PLUS") {
    newState.number++;
  }
  // 변경된 state를 반환해서 적용한다.
  return newState;
}

// 앞에서 정의한 리듀서 함수를 인자로 스토어를 생성한다.
const store = createStore(reducer);

// 스토어가 도입되면 right, left 컴포넌트에서 props를 통해 관리하던 값이나 함수는 더는 필요하지 않다.
// 따라서 기존 코드에서 제거한다.
function Right1() {
  return (
    <div>
      <h2>Right1</h2>
      <Right2 />
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h2>Right2</h2>
      <Right3 />
    </div>
  );
}

// useDispatch : 
// state 값을 변경할 때 리듀서 함수를 호출하는 역할을 한다.
function Right3() {
  // 타입을 PLUS로 설정하여 스토어에 정의된 리듀서를 호출한다.
  // json객체로 생성하면되고, 이 객체를 action이라고 한다.
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
    </div>
  );
}

const Left1 = () => {
  return (
    <div>
      <h2>Left1</h2>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h2>Left2</h2>
      <Left3 />
    </div>
  );
};

// useSelector :
// state 값을 선택할 때 사용한다.
const Left3 = () => {
  // 스토어에 정의된 여러개의 state 중 어떤 값을 받을지 정의한 함수를 useSelector의 인자로 전달한다.
  // 이 함수는 개발자가 여러 형태로 커스텀 할 수 있다.
  const number = useSelector((state) => {
    return state.number;
  });
  return (
    <div>
      <h2>Left3 : {number}</h2>
    </div>
  );
};

function App() {
  // 스토어가 생성되었으므로 App에서는 state를 관리하지 않는다.

  // <provider> 컴포넌트 :
  // 어떤 컴포넌트에 state를 제공할지 결정하는 래퍼 컴포넌트로 여기서는 app 컴포넌트 하위의
  // left/right 컴포넌트를 감싸준다.
  // 그러면 하위의 모든 컴포넌트에서 스토어를 공유할 수 있다.
  return (
    <div className="root">
      <h2>React - Redux</h2>
      <div id="grid">
        {/* 컴포넌트를 Wrapping 할 때 앞에서 생성한 스토어를 props로 전달한다. */}
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default App;
