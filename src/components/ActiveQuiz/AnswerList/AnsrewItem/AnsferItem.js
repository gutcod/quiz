import React from "react";
import "./AnsferItem.css";

const AnswerItem = (props) => {
  return <li className="AnswerItem">{props.answers.text}</li>;
};
export default AnswerItem;
