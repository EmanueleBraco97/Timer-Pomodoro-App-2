import "./Break.css"

const BreakIncrement = ({stateTimer, stateBreak, setBreak}) => {

    function breakIncrement() {
        if (!stateTimer) {
          if (stateBreak <= 59) {
            setBreak(stateBreak + 1);
          }
        }
      }

  return (
    <button id="break-increment" onClick={breakIncrement}>
      +
    </button>
  );
};

export default BreakIncrement;
