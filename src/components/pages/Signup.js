import { BsPersonCircle } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { Si1Password } from "react-icons/si";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className="signup">
          <TextInput
            type="text"
            placeholder="Enter name"
            icon={<BsPersonCircle />}
          />
          <TextInput type="text" placeholder="Enter email" icon={<ImMail4 />} />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon={<Si1Password />}
          />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon={<Si1Password />}
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
