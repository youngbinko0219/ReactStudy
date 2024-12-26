import React, { useState, useEffect } from "react";

function ComEdit({ selectedComment, onSave, onCancel }) {
  const [comment, setComment] = useState("");
  const [writer, setWriter] = useState("");

  useEffect(() => {
    if (selectedComment) {
      setComment(selectedComment.comment);
      setWriter(selectedComment.writer);
    }
  }, [selectedComment]);

  const handleSave = () => {
    if (comment.trim() === "" || writer.trim() === "") {
      alert("댓글과 작성자를 모두 입력해주세요.");
      return;
    }
    onSave({ ...selectedComment, comment, writer });
  };

  return (
    <div>
      <h3>댓글 수정</h3>
      {selectedComment ? (
        <form>
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
                  <button type="button" onClick={handleSave}>
                    수정 저장
                  </button>
                  <button type="button" onClick={onCancel}>
                    취소
                  </button>
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
      ) : (
        <p>수정할 댓글을 선택해주세요.</p>
      )}
    </div>
  );
}

export default ComEdit;
