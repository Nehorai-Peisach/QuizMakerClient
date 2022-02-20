import TestHeader from "./testHeader";
import TestBody from "./testBody";
import TestFotter from "./testFotter";
import { useState } from "react";

const QuestionsComponent = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [studentAnswer, setStudentAnswer] = useState();

  const onAnswerSelect = (studentAnswer) => {
    setStudentAnswer(studentAnswer);
  };

  const nextQuestion = (index) => {
    if (index + 1 < props.questions.length) {
      props.onStudentAnswersChange(studentAnswer);
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    }
  };
  const previosQuestion = (index) => {
    if (index > 0) {
      props.onStudentAnswersChange(studentAnswer);
      setCurrentQuestionIndex((prevState) => {
        return prevState - 1;
      });
    }
  };

  return (
    <div>
      <TestHeader title={props.Name} />
      <TestBody
        question={props.questions[currentQuestionIndex]}
        onAnswerSelect={onAnswerSelect}
      />
      <TestFotter
        index={currentQuestionIndex}
        questions={props.questions}
        previosQuestion={previosQuestion}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};

export default QuestionsComponent;
