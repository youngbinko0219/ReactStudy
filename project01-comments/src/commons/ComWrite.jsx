import React, { useState } from "react";

function ComWrite({ onAdd }) {
  const [comment, setComment] = useState("");
  const [writer, setWriter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "" || writer.trim() === "") {
      alert("댓글과 작성자를 모두 입력해주세요.");
      return;
    }
    onAdd({ comment, writer });
    setComment("");
    setWriter("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table id="boardTable">
          <tbody>
            <tr>
              <td id="writer">
                Writer:{" "}
                <input
                  type="text"
                  name="writer"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                />
              </td>
              <td rowSpan="2">
                <input type="submit" value="댓글 작성" id="btn" />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default ComWrite;
