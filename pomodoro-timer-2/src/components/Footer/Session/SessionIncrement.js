import "./Session.css";

const SessionIncrement = ({stateTimer, stateSession, setSession, setMinutes}) => {
    function sessionIncrement() {
        if (!stateTimer) {
          if (stateSession <= 59) {
            setSession(stateSession + 1);
            setMinutes(stateSession + 1);
          }
        }
      }

  return (
    <button id="session-increment" onClick={sessionIncrement}>
      +
    </button>
  );
};

export default SessionIncrement;
