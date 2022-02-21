import TestHeader from "./testHeader";
import TestBody from "./testBody";
import TestFotter from "./testFotter";
import { useEffect, useRef, useState } from "react";
import { isPropertySignature } from "typescript";

const QuestionsComponent = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [studentAnswer, setStudentAnswer] = useState();
  const answerRef=useRef();
  answerRef.current=studentAnswer;

  const onAnswerSelect = (newStudentAnswer) => {
    setStudentAnswer(newStudentAnswer)
  };
  const nextQuestion = () => {
    props.onStudentAnswersChange(answerRef.current);
    setCurrentQuestionIndex((prevState) => {
      return prevState + 1;
    });
  };
  const previosQuestion = () => {
    if (currentQuestionIndex > 0) {
      props.onStudentAnswersChange(answerRef.current);
      setCurrentQuestionIndex((prevState) => {
        return prevState - 1;
      });
    }
  };
  const submitQuiz = () => {
    props.onStudentAnswersChange(answerRef.current);
    props.onSubmitPressed();
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
        currentStage={currentQuestionIndex}
        onPrevios={previosQuestion}
        onNext={nextQuestion}
        onSubmit={submitQuiz}
      />
    </div>
  );
};

export default QuestionsComponent;
