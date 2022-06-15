import { AiOutlineArrowRight } from "react-icons/ai";
import { TiBackspaceOutline } from "react-icons/ti";
import Button from "./Button";
import "./styles/ProgressBar.css";

export default function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span>
          {" "}
          <TiBackspaceOutline />{" "}
        </span>
      </div>
      <div className="rangeArea">
        <div cLassName="tooltip">20% Complete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className="next">
          <span>Next Question</span>
          <span>
            <AiOutlineArrowRight />
          </span>
        </Button>
      </a>
    </div>
  );
}
