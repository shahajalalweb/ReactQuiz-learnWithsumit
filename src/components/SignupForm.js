import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { Si1Password } from "react-icons/si";
import { Link } from "react-router-dom";
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

  const { signup } = useAuth();

  return (
    <Form className={{ height: `500px;` }}>
      <TextInput
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<BsPersonCircle />}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<ImMail4 />}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Si1Password />}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon={<Si1Password />}
      />
      <Checkbox
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        text="I agree to the Terms &amp; Conditions"
      />
      <Button>Submit Now</Button>

      <div className="info">
        Already have an account? <Link href="login.html">Login</Link> instead.
      </div>
    </Form>
  );
}
