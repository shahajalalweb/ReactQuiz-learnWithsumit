import { AiOutlineArrowRight } from "react-icons/ai";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./styles/ProgressBar.css";

export default function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span>
          {" "}
          <GrLinkPrevious />{" "}
        </span>
      </div>
      <div className="rangeArea">
        <div cLassName="tooltip">20% Complete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/Result">
        <Button className="next">
          <span>Next Question</span>
          <span>
            <AiOutlineArrowRight />
          </span>
        </Button>
      </Link>
    </div>
  );
}
