import pomodoroFoto from "../../img/pomodoro.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={pomodoroFoto} alt="pomodoroFoto" />
      <h1 style={{ color: "white" }}>Pomodoro Timer App</h1>
    </header>
  );
};

export default Header;
