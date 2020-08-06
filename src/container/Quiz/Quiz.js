import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Which method is not part of ReactDOM?",
        rightAnswerId: 2,
        answers: [
          { text: "ReactDOM.destroy()", id: 1 },
          { text: "ReactDOM.hydrate()", id: 2 },
          { text: "ReactDOM.createPortal()", id: 3 },
          { text: "ReactDOM.findDOMNode()", id: 4 },
        ],
      },
    ],
  };
  onAnswerClickHandler = (answerId) => {
    console.log("answer", answerId);
  };
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
