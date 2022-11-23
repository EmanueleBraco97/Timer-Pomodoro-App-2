import "./Change.css";

const Change = ({ setSession, setBreak, stateBreak, stateSession }) => {
  const handleSessionChange = (e) => {
    setSession(e.target.value);
  };

  const handleBreakChange = (e) => {
    setBreak(e.target.value);
  };

  return (
    <>
      <form className="session">
        <label htmlFor="session">Work Session</label>
        <input
          id="session"
          type="number"
          min="1"
          max="60"
          value={stateSession}
          onChange={handleSessionChange}
        ></input>

        <label htmlFor="break">Break Session</label>
        <input
          id="break"
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
