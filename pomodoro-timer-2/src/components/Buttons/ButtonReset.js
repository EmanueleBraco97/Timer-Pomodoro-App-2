import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons"
import "./Button.css";

const ButtonReset = ({setMode,setBreak,setSession,setMinutes,setSeconds,setTimer}) => {
    function stopTimer() {
        setTimer(null);
      }
    function reset() {
        setBreak(5);
        setSession(25);
        setMinutes(25);
        setSeconds(0);
        setMode("Session");
        stopTimer();
      }

  return (
    <button id="reset" onClick={reset}>
      <FontAwesomeIcon icon={faRefresh} />
    </button>
  );
};

export default ButtonReset;
