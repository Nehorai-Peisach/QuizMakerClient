import TestHeader from "./testHeader";
import TestBody from "./testBody";
import TestFotter from "./testFotter";
import { useState } from "react";

const Test = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = (index) => {
    if (index+1 < props.questions.length) {
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    }
  };
  const previosQuestion = (index) => {
    if (index > 0) {
      setCurrentQuestionIndex((prevState) => {
        return prevState - 1;
      });
    }
  };

  return (
    <div>
      <TestHeader title={props.title} />
      <TestBody question={props.questions[currentQuestionIndex]} />
      <TestFotter
        index={currentQuestionIndex}
        questions={props.questions}
        previosQuestion={previosQuestion}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};

export default Test;
