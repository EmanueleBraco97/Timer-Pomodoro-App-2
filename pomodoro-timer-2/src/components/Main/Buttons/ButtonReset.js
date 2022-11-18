import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import "./Button.css";

const ButtonReset = ({ intervalId, setMode, setTimer, stateSession }) => {
  const clickReset = () => {
    clearInterval(intervalId);
    setMode("Session");
    setTimer(stateSession * 60);
  };

  return (
    <button className="button-reset" id="reset" onClick={clickReset}>
      <FontAwesomeIcon className="button" icon={faRefresh} />
    </button>
  );
};

export default ButtonReset;
