import React from "react";
import "./ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => (
  <div className="ActivQuiz">
    <p className="Questions">
      <span>
        <strong>1.</strong>&nbsp; {props.question}
      </span>
      <small> 4/12</small>
    </p>
    <AnswerList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </div>
);

export default ActiveQuiz;
