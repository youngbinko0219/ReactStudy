import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import List from "./component/board/List";
import Write from "./component/board/Write";
import View from "./component/board/View";
import NotFound from "./component/common/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<List></List>} />
            <Route path="/list" element={<List></List>} />
            <Route path="/view" element={<View></View>} />
            <Route path="/write" element={<Write></Write>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
