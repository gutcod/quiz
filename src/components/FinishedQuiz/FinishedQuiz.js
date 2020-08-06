import React from "react";
import "./FinishedQuiz.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error"
              ? "fa-times error"
              : "fa-check success",
          ];
          return (
            <li key={index}>
              <strong>{index + 1}.</strong>&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        Your score is: {successCount} / {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Repeat
        </Button>
        <Button type="succes">Find Test</Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
