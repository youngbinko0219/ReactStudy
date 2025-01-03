import React, { useState } from "react";

function ChatRoom({ member }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // 메시지를 전송하는 로직을 여기에 추가
    console.log("Sending message:", message);
    setMessage(""); // 메시지 전송 후 입력란 비우기
  };

  return (
    <div className="card mask-custom">
      <div
        className="card-header d-flex justify-content-between p-3"
        style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
      >
        <p className="fw-bold mb-0">{member.name}</p>
        <p className="text-light small mb-0">
          <i className="far fa-clock"></i> Last message
        </p>
      </div>
      <div className="card-body">
        {member.messages.map((msg, index) => (
          <div key={index} className="d-flex justify-content-between mb-4">
            <p className="mb-0">{msg.text}</p>
            <span className="text-light small">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="card-footer">
        <div className="form-outline form-white">
          <textarea
            className="form-control"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label className="form-label" htmlFor="messageText">
            Message
          </label>
        </div>
        <button
          type="button"
          className="btn btn-light btn-lg btn-rounded float-end mt-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
