import { BiHelpCircle } from "react-icons/bi";
import Answers from "./Answers";
import "./styles/Question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="qtitle">
        <span>
          <BiHelpCircle />
        </span>{" "}
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}
