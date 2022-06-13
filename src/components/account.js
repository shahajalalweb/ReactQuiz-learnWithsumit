import "./styles/Account.css";

export default function account() {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
