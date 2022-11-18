import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Button.css";
import { useState } from "react";

const ButtonStop = ({ setTimer, intervalId, setIntervalId }) => {
  const [isPaused, setIsPaused] = useState(true);

  const clickPlay = () => {
    setIsPaused(false);

    setIntervalId(
      setInterval(() => {
        setTimer((prevValue) => prevValue - 1);
      }, 1000)
    );
  };

  const clickPause = () => {
    setIsPaused(true);
    clearInterval(intervalId);
  };

  return isPaused ? (
    <button className="button-start" onClick={clickPlay} id="start">
      <FontAwesomeIcon className="button" icon={faPlay} />
    </button>
  ) : (
    <button className="button-pause" onClick={clickPause}>
      <FontAwesomeIcon className="button" icon={faCircle} />
    </button>
  );
};

export default ButtonStop;
