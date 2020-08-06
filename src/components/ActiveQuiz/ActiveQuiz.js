import React from "react";
import "./ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => (
  <div className="ActivQuiz">
    <p className="Questions">
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
      </span>
      <small>
        {" "}
        {props.answerNumber}/{props.quizLength}
      </small>
    </p>
    <AnswerList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);

export default ActiveQuiz;
