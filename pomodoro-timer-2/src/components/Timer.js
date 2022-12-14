import React, { useState, useEffect } from "react";
import "./Timer.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Timer = () => {
  const [stateBreak, setBreak] = useState(5);
  const [stateSession, setSession] = useState(1);
  const [stateTimer, setTimer] = useState(stateSession * 60);
  const [stateMode, setMode] = useState("Session");

  useEffect(() => {
    function switchesTimerMode() {
      const newMode = stateMode === "Session" ? "Break" : "Session";
      const newTimer =
        newMode === "Session" ? stateSession * 60 : stateBreak * 60;

      setMode(newMode);
      setTimer(newTimer);
    }

    if (stateTimer === 0) {
      switchesTimerMode();
    }
  }, [stateBreak, stateMode, stateSession, stateTimer]);

  return (
    <div className="container">
      <Header />
      <Main
        stateMode={stateMode}
        setMode={setMode}
        stateTimer={stateTimer}
        setTimer={setTimer}
        stateSession={stateSession}
      />
      <Footer
        stateBreak={stateBreak}
        setBreak={setBreak}
        stateSession={stateSession}
        setSession={setSession}
      />
    </div>
  );
};

export default Timer;
