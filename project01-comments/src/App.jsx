import "./App.css";
import { useState } from "react";

import Board from "./commons/Board";
import ComList from "./commons/ComList";
import ComWrite from "./commons/ComWrite";
import ComEdit from "./commons/ComEdit";

function App() {
  const [myData, setMyData] = useState([
    {
      no: 1,
      comment: "오늘은 React공부하는날",
      writer: "낙짜쌤",
      date: "2023-01-01",
    },
    {
      no: 2,
      comment: "어제는 Javascript공부해씸",
      writer: "유겸이",
      date: "2023-03-03",
    },
    {
      no: 3,
      comment: "내일은 Project해야징",
      writer: "개똥이",
      date: "2023-05-05",
    },
  ]);

  const [selectedComment, setSelectedComment] = useState(null);

  const handleAddComment = (newComment) => {
    const newNo = myData.length + 1;
    const newDate = new Date().toISOString().split("T")[0]; // 현재 날짜
    const updatedData = [
      ...myData,
      {
        no: newNo,
        comment: newComment.comment,
        writer: newComment.writer,
        date: newDate,
      },
    ];
    setMyData(updatedData);
  };

  const handleEditComment = (no) => {
    const commentToEdit = myData.find((comment) => comment.no === no);
    setSelectedComment(commentToEdit);
  };

  const handleSaveEdit = (updatedComment) => {
    const updatedData = myData.map((item) =>
      item.no === updatedComment.no ? updatedComment : item
    );
    setMyData(updatedData);
    setSelectedComment(null);
  };

  const handleCancelEdit = () => {
    setSelectedComment(null);
  };

  const handleDeleteComment = (no) => {
    const updatedData = myData.filter((item) => item.no !== no);
    setMyData(updatedData);
  };

  return (
    <>
      <Board />
      <ComList
        myData={myData}
        onEdit={handleEditComment}
        onDelete={handleDeleteComment}
      />
      <ComWrite onAdd={handleAddComment} />
      <ComEdit
        selectedComment={selectedComment}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
    </>
  );
}

export default App;
