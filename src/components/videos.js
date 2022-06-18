import { Link } from "react-router-dom";
import "./styles/Videos.css";
import Video from "./video";

export default function videos() {
  return (
    <div className="videos">
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
    </div>
  );
}
