import { useState, useEffect, useRef } from "react";
import "../Chat.css";
import { realtime } from "../realtimeConfig";
import { ref, child, set, onValue, push } from "firebase/database";
import { useSearchParams } from "react-router-dom";

const nowDate = () => {
  let dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = ("0" + (1 + dateObj.getMonth())).slice(-2);
  let day = ("0" + dateObj.getDate()).slice(-2);
  let hours = ("0" + dateObj.getHours()).slice(-2);
  let minutes = ("0" + dateObj.getMinutes()).slice(-2);
  let seconds = ("0" + dateObj.getSeconds()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 날짜 비교 함수
const isToday = (date) => {
  if (!date) return false;
  
  const today = new Date();
  const messageDate = new Date(date);

  return (
    today.getFullYear() === messageDate.getFullYear() &&
    today.getMonth() === messageDate.getMonth() &&
    today.getDate() === messageDate.getDate()
  );
};

const scrollTop = (chatWindow) => {
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

function ChatMessage() {
  const [searchParam] = useSearchParams();
  const roomId = searchParam.get("roomId");
  const userId = searchParam.get("userId");
  const chatWindow = useRef();
  const [chatData, setChatData] = useState([]);

  function messageWrite(chatRoom, chatId, chatMessage) {
    const newPostKey = push(child(ref(realtime), "tempValue")).key;
    set(ref(realtime, chatRoom + "/" + newPostKey), {
      id: chatId,
      name: chatId,
      message: chatMessage,
      time: nowDate(),
    });
    console.log("입력성공");
  }

  const dbRef = ref(realtime, roomId);
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      let showDiv = [];
      let lastMessageDate = null;

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const messageDate = childData.time;

        // 날짜 비교
        const isMessageToday = isToday(messageDate);

        // "오늘" 표시
        if (lastMessageDate !== messageDate) {
          if (!isMessageToday) {
            showDiv.push(
              <div key="today-divider" className="text-center my-3">
                <p className="text-muted">-----오늘-----</p>
              </div>
            );
          }
        }

        // 사용자 메시지 구분
        if (childData.id === userId) {
          showDiv.push(
            <div
              className="d-flex flex-row justify-content-end mb-4"
              key={childSnapshot.key}
            >
              <div
                className="p-3 me-3 border bg-body-tertiary"
                style={{ borderRadius: "15px" }}
              >
                <p className="small mb-0">{childData.message}</p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar"
                style={{ width: "45px", height: "100%" }}
              />
            </div>
          );
          showDiv.push(
            <p
              className="small text-muted mt-1"
              key={`time-${childSnapshot.key}`}
              style={{ textAlign: "right" }}
            >
              {childData.time}
            </p>
          );
        } else {
          showDiv.push(
            <div
              className="d-flex flex-row justify-content-start mb-4"
              key={childSnapshot.key}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar"
                style={{ width: "45px", height: "100%" }}
              />
              <div>
                <p className="small text-muted mb-1">{childData.name}</p>
                <div
                  className="p-3 ms-3"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgba(57, 192, 237,.2)",
                  }}
                >
                  <p className="small mb-0">{childData.message}</p>
                </div>
                <p className="small text-muted">{childData.time}</p>
              </div>
            </div>
          );
        }

        lastMessageDate = messageDate;
      });

      setChatData(showDiv);
    });
  }, [roomId, userId]);

  useEffect(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    }
  }, []);

  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" id="chat1" style={{ borderRadius: "15px" }}>
              <div
                className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <i className="fas fa-angle-left"></i>
                <p className="mb-0 fw-bold">Live chat</p>
                <i
                  className="fas fa-times"
                  onClick={() => window.self.close()}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="card-body" ref={chatWindow}>
                {chatData}
              </div>
              <div data-mdb-input-init className="form-outline">
                <textarea
                  className="form-control bg-body-tertiary"
                  id="textAreaExample"
                  rows="4"
                  placeholder="메세지를 입력하세요."
                ></textarea>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-info"
                  onClick={(e) => {
                    e.preventDefault();
                    let message =
                      document.getElementById("textAreaExample").value;
                    if (message === "") {
                      alert("메세지를 입력하세요");
                      return;
                    }
                    messageWrite(roomId, userId, message);
                    document.getElementById("textAreaExample").value = "";
                  }}
                >
                  전송
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatMessage;
