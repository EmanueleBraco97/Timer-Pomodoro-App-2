const TimerOutput = ({ stateTimer }) => {
  let minutes = Math.floor(stateTimer / 60);
  let seconds = stateTimer % 60;

  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="timer-output">
      <div id="time-left">{minutes + ":" + seconds}</div>
    </div>
  );
};

export default TimerOutput;
