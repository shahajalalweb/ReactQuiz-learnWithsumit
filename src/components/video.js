import Logo from "./images/3.jpg";
import "./styles/Video.css";

export default function video() {
  return (
    <div className="video">
      <img src={Logo} alt="playlist" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className="qmeta">
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}
