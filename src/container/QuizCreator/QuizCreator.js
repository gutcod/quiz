import React, { Component, Fragment } from "react";
import "./QuizCreator.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/input";
import { createControl } from "../../form/formFramework";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
  return createControl(
    {
      label: `option ${number}`,
      errorMessage: "input didn't be emty",
    },
    { required: true }
  );
}
function createFomrControls() {
  return {
    question: createControl(
      {
        label: "input question",
        errorMessage: "input didn't be emty",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}
export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFomrControls(),
  };
  submitHandler = (event) => {
    event.preventDefault();
  };
  changeHandler = (value, controlName) => {};
  addQuestionHandler = () => {};
  createQuizHandler = () => {};
  selectChangeHandler = (event) => {
    this.setState({ rightAnswerId: event.target.value });
  };
  renderControl() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shoultValidate={!!control.shoultValidate}
            thouched={control.thouched}
            errorMessage={control.errorMesage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Fragment>
      );
    });
  }
  render() {
    const select = (
      <Select
        label="check right answer"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );
    return (
      <div className="QuizCreator">
        <div>
          <h1>Create Quiz</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControl()}
            {select}
            <Button type="primary" onClick={this.addQuestionHandler}>
              Add Question
            </Button>
            <Button type="succes" onClick={this.createQuizHandler}>
              Create Quiz
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
