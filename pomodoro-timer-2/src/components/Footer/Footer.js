import "./Footer.css";
import Change from "./Change";

const Footer = ({ stateBreak, setBreak, stateSession, setSession }) => {
  return (
    <footer className="footer">
      <Change
        setSession={setSession}
        setBreak={setBreak}
        stateBreak={stateBreak}
        stateSession={stateSession}
      />
    </footer>
  );
};

export default Footer;
