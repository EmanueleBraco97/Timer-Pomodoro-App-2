import "./Footer.css";

import BreakDecrement from "./Break/BreakDecrement";
import BreakIncrement from "./Break/BreakIncrement";
import SessionDecrement from "./Session/SessionDecrement";
import SessionIncrement from "./Session/SessionIncrement";

const Footer = ({stateTimer, stateBreak, setBreak, stateSession, setSession, setMinutes}) => {
    return(
        <footer className="footer">
        <section className="break">
          <span id="break-label">Break Time</span>
          <div className="break-setting">
            <BreakDecrement
              stateTimer={stateTimer}
              stateBreak={stateBreak}
              setBreak={setBreak}
            />
            <div id="break-length">{stateBreak}</div>
            <BreakIncrement
              stateTimer={stateTimer}
              stateBreak={stateBreak}
              setBreak={setBreak}
            />
          </div>
        </section>

        <section className="session">
          <span id="session-label">Work Session</span>
          <div className="session-setting">
            <SessionDecrement
              stateTimer={stateTimer}
              stateSession={stateSession}
              setSession={setSession}
              setMinutes={setMinutes}
            />
            <div id="session-length">{stateSession}</div>
            <SessionIncrement
              stateTimer={stateTimer}
              stateSession={stateSession}
              setSession={setSession}
              setMinutes={setMinutes}
            />
          </div>
        </section>
      </footer>
    )
}

export default Footer;