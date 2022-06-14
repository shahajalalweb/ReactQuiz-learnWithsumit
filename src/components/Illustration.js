import Logo from "./images/signup.svg";
import "./styles/Illustration.css";

export default function Illustration() {
  return (
    <div className="illustration">
      <img src={Logo} alt="Signup" />
    </div>
  );
}
