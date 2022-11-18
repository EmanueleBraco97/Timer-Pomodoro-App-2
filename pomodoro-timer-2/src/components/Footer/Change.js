import "./Change.css";

const Change = ({
  setTimer,
  setSession,
  setBreak,
  stateBreak,
  stateSession,
}) => {
  const handleSessionChange = (e) => {
    setSession(e.target.value);
    setTimer(e.target.value * 60);
  };

  const handleBreakChange = (e) => {
    setBreak(e.target.value);
  };

  return (
    <>
      <form className="session">
        <label>Work Session</label>
        <input
          type="number"
          min="1"
          max="60"
          value={stateSession}
          onChange={handleSessionChange}
        ></input>
      </form>

      <form className="break">
        <label>Break Session</label>
        <input
          type="number"
          min="1"
          max="30"
          value={stateBreak}
          onChange={handleBreakChange}
        ></input>
      </form>
    </>
  );
};

export default Change;
