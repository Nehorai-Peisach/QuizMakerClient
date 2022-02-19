import { useState } from "react";
import MultiAnswer from "./multiAnswer";
import SingleAnswer from "./singleAnswer";
const TestBody = (props) => {
  

  const onAnswerSelect = (answers) => {
   props.onAnswerSelect({ question_id: props.question._id, answers: answers });
  };

  return (
    <div className="bd">
      <h2 className={"bd-title"}>{props.question.title}</h2>
      <h4 className="bd-question">{props.question.text}</h4>
      {props.question.type === "single" ? (
        <SingleAnswer
          answers={props.question.answers}
          onAnswerSelect={onAnswerSelect}
        />
      ) : (
        <MultiAnswer
          answers={props.question.answers}
          onAnswerSelect={onAnswerSelect}
        />
      )}
    </div>
  );
};

export default TestBody;
