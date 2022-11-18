import "./Footer.css";

// import BreakDecrement from "./Break/BreakDecrement";
// import BreakIncrement from "./Break/BreakIncrement";
// import SessionDecrement from "./Session/SessionDecrement";
// import SessionIncrement from "./Session/SessionIncrement";
import Change from "./Change";

const Footer = ({
  stateBreak,
  setBreak,
  stateSession,
  setSession,
  setTimer,
}) => {
  return (
    <footer className="footer">
      <Change
        setTimer={setTimer}
        setSession={setSession}
        setBreak={setBreak}
        stateBreak={stateBreak}
        stateSession={stateSession}
      />
    </footer>
  );
};

export default Footer;
