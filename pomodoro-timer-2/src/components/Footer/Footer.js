import "./Footer.css";
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
