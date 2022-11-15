import "./Main.css";

import ButtonStartStop from "../Buttons/ButtonStartStop";
import ButtonReset from "../Buttons/ButtonReset";

const Main = ({stateMinutes, stateSeconds, setSeconds, stateMode, setMode, setSession, stateTimer, setTimer, setBreak, setMinutes}) => {

    function TimerOutput({ time, mode }) {
        return (
          <div className="timer-output">
            <div id="timer-label">{mode}</div>
            <div id="time-left">{time}</div>
          </div>
        );
      }

      function timeLeft() {
        let minutes = stateMinutes < 10 ? "0" + stateMinutes : stateMinutes;
        let seconds = stateSeconds < 10 ? "0" + stateSeconds : stateSeconds;
        return minutes + ":" + seconds;
      }

    return(
        <main className="main">
        <section className="section-center-structure">
          <div className="message">
            {stateMode}
          </div>
          <div className=""><TimerOutput time={timeLeft()}/></div>

          <div className="buttons">
            <ButtonStartStop setTimer={setTimer} stateTimer={stateTimer} />

            <ButtonReset
              setMode={setMode}
              setBreak={setBreak}
              setSession={setSession}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
              setTimer={setTimer}
            />
          </div>
        </section>
      </main>
    )
}

export default Main;