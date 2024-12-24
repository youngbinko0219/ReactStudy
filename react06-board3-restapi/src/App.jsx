import "./App.css";
import List from "./component/board/List";
import Write from "./component/board/Write";
import View from "./component/board/View";
import Edit from "./component/board/Edit";
import NotFound from "./component/common/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* 첫 진입시에는 게시판의 목록을 렌더링한다. */}
        <Route path="/" element={<List></List>} />
        <Route path="/list" element={<List></List>} />
        <Route path="/view">
          <Route path=":idx" element={<View></View>} />
        </Route>
        <Route path="/write" element={<Write></Write>} />
        <Route path="/edit">
          <Route path=":idx" element={<Edit></Edit>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
