import Account from "./account";
import Logo from "./images/logo-bg.png";
import "./styles/Nav.css";
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
