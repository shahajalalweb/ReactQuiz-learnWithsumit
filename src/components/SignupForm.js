import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { Si1Password } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form className={{ height: `500px;` }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
        icon={<BsPersonCircle />}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<ImMail4 />}
      />
      <TextInput
        type="password"
        required
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Si1Password />}
      />
      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon={<Si1Password />}
      />
      <Checkbox
        value={agree}
        required
        onChange={(e) => setAgree(e.target.value)}
        text="I agree to the Terms &amp; Conditions"
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
