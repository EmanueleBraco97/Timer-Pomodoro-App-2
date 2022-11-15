import "./Session.css";

const SessionDecrement = ({stateTimer, stateSession, setSession, setMinutes}) => {

  function sessionDecrement() {
    if (!stateTimer) {
      if (stateSession !== 1) {
        setSession(stateSession - 1);
        setMinutes(stateSession - 1);
      }
    }
  }

  return (
    <button id="session-decrement" onClick={sessionDecrement}>
      -
    </button>
  );
};

export default SessionDecrement;
