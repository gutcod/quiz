import React from "react";
import "./ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => (
  <div className="ActivQuiz">
    <p className="Questions">
      <span>
        <strong>1.</strong>&nbsp; How are you?
      </span>
      <small> 4/12</small>
    </p>
    <AnswerList answers={props.answers} />
  </div>
);

export default ActiveQuiz;
