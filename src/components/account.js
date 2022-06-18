import { Link } from "react-router-dom";
import "./styles/Account.css";

export default function account() {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/Signup">Signup</Link>
      <Link to="/Login">Login </Link>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
