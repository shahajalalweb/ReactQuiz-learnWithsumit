import { BsPersonCircle } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { Si1Password } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import TextInput from "../TextInput";

<Form className={{ height: `500px;` }}>
  <TextInput type="text" placeholder="Enter name" icon={<BsPersonCircle />} />
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
  <Button>Submit Now</Button>

  <div className="info">
    Already have an account? <Link href="login.html">Login</Link> instead.
  </div>
</Form>;
