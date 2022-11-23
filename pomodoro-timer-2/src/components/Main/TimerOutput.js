const TimerOutput = ({ stateTimer }) => {
  let minutes = Math.floor(stateTimer / 60);
  let seconds = stateTimer % 60;

  if (seconds < 10) seconds = "0" + seconds;

  return (
    <time>
      <div id="time-left">{minutes + ":" + seconds}</div>
    </time>
  );
};

export default TimerOutput;
