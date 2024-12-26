import React from "react";

function ComList({ myData, onEdit, onDelete }) {
  const handleDelete = (no) => {
    const isConfirmed = window.confirm("삭제할까요?");
    if (isConfirmed) {
      onDelete(no);
    }
  };

  return (
    <div>
      <h3>댓글 목록</h3>
      <table id="boardTable" border="1" style={{ width: "100%" }}>
        <tbody>
          {myData.map((item) => (
            <React.Fragment key={item.no}>
              <tr>
                <td>{item.no}</td>
                <td>작성자: {item.writer}</td>
                <td>
                  날짜: {item.date}
                  <button
                    type="button"
                    onClick={() => onEdit(item.no)}
                    style={{ marginLeft: "10px" }}
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.no)}
                    style={{ marginLeft: "10px" }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="subject">
                  {item.comment}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComList;
