import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import "./styles/Account.css";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="account">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="account-fontSizing">{currentUser.displayName}</span>
          <span title="logout" onClick={logout}>
            <BiLogIn size={20} />
          </span>
        </>
      ) : (
        <>
          <Link className="link-size" to="/Signup">
            Signup
          </Link>
          <Link className="link-size" to="/Login">
            Login{" "}
          </Link>
        </>
      )}

      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
