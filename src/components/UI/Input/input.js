import React from "react";
import "./input.css";

function isInvalid({ valid, touched, shoudValidate }) {
  return !valid && shoudValidate && touched;
}
const Input = (props) => {
  const inputType = props.type || "text";
  const cls = ["Input"];
  const htmlFor = `${inputType}-${Math.random()}`;
  //   if (isInvalid(props)) {
  //     cls.push("invalid");
  //   }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Your password is wrong"}</span>
      ) : null}
    </div>
  );
};
export default Input;
