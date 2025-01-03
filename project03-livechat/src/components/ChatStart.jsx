import { useRef } from "react";

const ChatStart = () => {
  const refRoom = useRef(); // 채팅방의 이름
  const refId = useRef(); // 접속자의 아이디

  const openChatWin = () => {
    // 아이콘 관련 없이 방명과 대화명만 쿼리 스트링으로 전달
    window.open(
      `/chat/talk?roomId=${refRoom.current.value}&userId=${refId.current.value}`,
      "",
      "width=500,height=700"
    );
  };

  return (
    <>
      <h2>Firebase - Realtime Database Chatting</h2>
      방명 : <input
        type="text"
        name="roomId"
        value="room1"
        ref={refRoom}
      />{" "}
      <br />
      대화명 : <input type="text" name="userId" ref={refId} /> <br />
      <button type="button" onClick={openChatWin}>
        채팅시작
      </button>
    </>
  );
};

export default ChatStart;
