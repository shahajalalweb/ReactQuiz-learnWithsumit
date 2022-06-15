import { AiFillCloseCircle, AiFillPlayCircle } from "react-icons/ai";
import Logo from "./images/3.jpg";
import "./styles/MiniPlayer.css";

export default function MiniPlayer() {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="open">
        <AiFillPlayCircle size={20} />
      </span>
      <span className="close">
        <AiFillCloseCircle />
      </span>
      <img src={Logo} alt="Alt Tag" />
      <p>#23 React Hooks Bangla- React useReducer hook Bangla</p>
    </div>
  );
}
