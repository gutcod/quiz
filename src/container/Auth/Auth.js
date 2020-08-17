import React, { Component } from "react";
import "./Auth.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/input";
import is from "is_js";

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Wrong Email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Wrong Password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shoudValidate={!!control.validation}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }
  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.lemgth >= validation.minLength && isValid;
    }
    return isValid;
  }
  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });
    this.setState({ formControls, isFormValid });
  };
  loginHandler = () => {};
  registerHandler = () => {};
  submitHandler = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className="AuthForm">
            {this.renderInputs()}
            <Button
              type="succes"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Login
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
