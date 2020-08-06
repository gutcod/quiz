import React from "react";
import "./AnsrewList.css";
import AnswerItem from "./AnsrewItem/AnsferItem";

const AnswerList = (props) => (
  <ul className="AnswerList">
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswerList;
