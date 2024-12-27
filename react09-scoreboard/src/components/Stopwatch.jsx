import React, { useRef, useState } from "react";

export default function Stopwatch(props) {
  // 스탑워치가 동작중인지 확인하기 위한 state
  const [timerFlag, setTimerFlag] = useState(false);
  // 타이머에서 사용할 시간
  const [ticker, setTicker] = useState(0);
  // setInterval()의 반환값을 저장 후 clearInterval()에서 중지할 때 사용
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTicker((prevTicker) => prevTicker + 1); // 이전 상태 값을 기반으로 업데이트
      }, 1000);
    }
  };

  // 스탑워치 중지
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="stopwatch">
      <h1 className="h1">StopWatch</h1>
      {/* 시간 표시 */}
      <span className="stopwatch-time">{ticker}</span>
      <button
        onClick={() => {
          setTimerFlag((prevFlag) => !prevFlag);
          if (timerFlag) {
            stopTimer();
          } else {
            startTimer();
          }
        }}
      >
        {timerFlag ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          if (timerFlag) {
            alert("스톱워치가 동작중입니다.");
          } else {
            setTicker(0);
          }
        }}
      >
        Reset
      </button>
    </div>
  );
}
