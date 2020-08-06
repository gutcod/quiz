import React from "react";
import "./AnsrewList.css";
import AnswerItem from "./AnsrewItem/AnsferItem";

const AnswerList = (props) => (
  <ul className="AnswerList">
    {props.answers.map((answers, inx) => {
      return <AnswerItem key={inx} answers={answers} />;
    })}
  </ul>
);

export default AnswerList;
