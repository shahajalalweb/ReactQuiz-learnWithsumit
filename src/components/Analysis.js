import Question from "./Question";
import "./styles/Analysis.css";

export default function Analysis() {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4> You answerd 5 out of 10 question correctly </h4>
      <Question />
    </div>
  );
}
