import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import { findRenderedComponentWithType } from "react-dom/test-utils";

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Which method is not part of ReactDOM?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "ReactDOM.destroy()", id: 1 },
          { text: "ReactDOM.hydrate()", id: 2 },
          { text: "ReactDOM.createPortal()", id: 3 },
          { text: "ReactDOM.findDOMNode()", id: 4 },
        ],
      },
      {
        question: "Which method is not part of ReactDOM?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "this.getState()", id: 1 },
          { text: "this.prototype.stateValue", id: 2 },
          { text: "this.state", id: 3 },
          { text: "this.values", id: 4 },
        ],
      },
    ],
  };
  onAnswerClickHandler = (answerId) => {
    console.log("answer", answerId);
    this.setState({ activeQuestion: this.state.activeQuestion + 1 });
  };
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}
