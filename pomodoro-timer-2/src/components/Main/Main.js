import "./Main.css";
import { useState } from "react";

import ButtonStartStop from "./Buttons/ButtonStartStop";
import ButtonReset from "./Buttons/ButtonReset";
import TimerOutput from "./TimerOutput";

const Main = ({
  setSeconds,
  stateMode,
  setMode,
  setSession,
  stateTimer,
  setTimer,
  setBreak,
  setMinutes,
  stateSession,
}) => {
  const [intervalId, setIntervalId] = useState(0);

  return (
    <main className="main">
      <section className="section-center-structure">
        <div className="message">{stateMode}</div>
        <div className="">
          <TimerOutput stateTimer={stateTimer} />
        </div>

        <div className="buttons">
          <ButtonStartStop
            setTimer={setTimer}
            stateTimer={stateTimer}
            intervalId={intervalId}
            setIntervalId={setIntervalId}
          />

          <ButtonReset
            setMode={setMode}
            setBreak={setBreak}
            setSession={setSession}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
            setTimer={setTimer}
            stateSession={stateSession}
            intervalId={intervalId}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
