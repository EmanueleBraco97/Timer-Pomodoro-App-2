import React, { useState, useEffect } from "react";
import "./Timer.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Timer = () => {
  const [stateBreak, setBreak] = useState(5);
  const [stateSession, setSession] = useState(25);
  const [stateMinutes, setMinutes] = useState(25);
  const [stateSeconds, setSeconds] = useState(0);
  const [stateTimer, setTimer] = useState(null);
  const [stateMode, setMode] = useState("Session");

  useEffect(() => {
    if (stateTimer) {
      let interval = setInterval(() => {
        handleNumber();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  function handleNumber() {
    if (stateSeconds === 0) {
      if (stateMinutes === 0) {
        switchesTimerMode();
      } else {
        setSeconds(59);
        setMinutes(stateMinutes - 1);
      }
    } else {
      setSeconds(stateSeconds - 1);
    }
  }

  function switchesTimerMode() {
    // eslint-disable-next-line no-unused-expressions
    if (stateMode === "Session") {
      setMode("Break");
      setMinutes(stateBreak);
      setSeconds(0);
    } else {
      setMode("Session");
      setMinutes(stateSession);
      setSeconds(0);
    }
  }

  return (
    <div className="container">
      <Header />
      <Main
        stateMinutes={stateMinutes}
        stateSeconds={stateSeconds}
        setSeconds={setSeconds}
        stateMode={stateMode}
        setMode={setMode}
        setSession={setSession}
        stateTimer={stateTimer}
        setTimer={setTimer}
        setBreak={setBreak}
        setMinutes={setMinutes}
      />
      <Footer
        stateTimer={stateTimer}
        stateBreak={stateBreak}
        setBreak={setBreak}
        stateSession={stateSession}
        setSession={setSession}
        setMinutes={setMinutes}
      />
    </div>
  );
};

export default Timer;
