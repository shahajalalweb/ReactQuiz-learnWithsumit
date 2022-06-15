import { ImMail4 } from "react-icons/im";
import { Si1Password } from "react-icons/si";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import "../styles/Login.css";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className="login">
          <TextInput type="text" placeholder="Enter email" icon={<ImMail4 />} />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon={<Si1Password />}
          />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
