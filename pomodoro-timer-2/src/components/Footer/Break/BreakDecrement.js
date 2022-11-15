import "./Break.css";

const BreakDecrement = ({stateTimer,stateBreak,setBreak}) => {

    function breakDecrement() {
        if (!stateTimer) {
          if (stateBreak !== 1) {
            setBreak(stateBreak - 1);
          }
        }
      }

    return (
      <button id="break-decrement" onClick={breakDecrement}>
        -
      </button>
    );
  };
  
  export default BreakDecrement;