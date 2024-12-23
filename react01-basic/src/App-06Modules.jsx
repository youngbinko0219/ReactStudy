// App 컴포넌트에서 사용하는 스타일 시트
import './App.css';
// state를 관리하기 위한 useState 훅 임포트트
import {useState} from 'react';

/*
각각의 컴포넌트를 js 혹은 jsx 파일로 생성한 후 모듈화 한다.
임포트 시에는 저장된 경로와 컴포넌트 명까지만 기술하면 된다.
*/
import ListComponent from './component/ListComponent';
import ViewComponent from './component/ViewComponent';
import WriteComponent from './component/WriteComponent';

function App() {
  /*
  state의 변수명은 mode, 초기값은 list, 이를 변경하기 위한 함수로
  setMode()를 정의한다.
  */
    const [mode, setMode] = useState('list');
    let contents = '';
    /*
    각 모드에 따라 컴포넌트를 변수에 할당한다.
    */
    if(mode === "view") {
      /*
      모드의 변경을 위한 함수를 정의한 후 changeMode라는 이름의 Props를 자식 컴포넌트로 전달한다.
      */
        contents = <ViewComponent changeMode={(pmode) => {setMode(pmode)}} />;
    } else if(mode === "write") {
        contents = <WriteComponent changeMode={(pmode) => {setMode(pmode)}} />;
    } else {
        contents = <ListComponent changeMode={(pmode) => {setMode(pmode)}} />;
    }

    // 최종적으로 컴포넌트를 렌더링한다.
    return (
        <div className="App">
            <h2>React - 모듈화</h2>
            {contents}
        </div>
    );
}

export default App;
