import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Button.css";

const ButtonStop = ({stateTimer, setTimer}) => {

    function startStop() {
        stateTimer ? stopTimer() : startTimer();
      }

      function stopTimer() {
        setTimer(null);
        //setPeriodLength(null)
      }

      function startTimer() {
        setTimer("Start");
        //setPeriodLength(1000)
      }


    return(
        <div>
            <button id="start_stop" onClick={startStop}>
                {stateTimer ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
        </div>
    )
}

export default ButtonStop;