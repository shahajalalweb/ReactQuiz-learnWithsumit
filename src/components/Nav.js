import { Link } from "react-router-dom";
import Account from "./Account";
import Logo from "./images/logo-bg.png";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
