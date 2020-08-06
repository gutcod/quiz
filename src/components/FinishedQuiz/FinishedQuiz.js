import React from "react";
import "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  return (
    <div className="FinishedQuiz">
      <ul>
        <li>
          <strong>1. </strong>
          blabla
          <i className={"fa fa-times error"} />
        </li>
        <li>
          <strong>2. </strong>
          blabla
          <i className={"fa fa-check succes"} />
        </li>
      </ul>
      <p>Your score:</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
