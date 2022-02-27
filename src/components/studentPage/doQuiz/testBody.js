import { useEffect, useState } from "react";
import MultiAnswer from "./multiAnswer";
import SingleAnswer from "./singleAnswer";
const TestBody = (props) => {
  const [studentAnswers, setStudentAnswers] = useState(props.answers);
  const [answers, setAnswers] = useState(props.question.answers);
  const [type, setType] = useState("single");

  useEffect(() => {
    setType(props.question.type);
    setAnswers(props.question.answers);
    setStudentAnswers(props.answers);
  }, [props.question, props.answers]);

  const onAnswer = (answers) => {
    props.onAnswer({ question_id: props.question._id, answers: answers });
  };
  return (
    <div className="bd">
      <h4 className="bd-question">{props.question.text}</h4>
      {type === "single" ? (
        <SingleAnswer
          answers={answers}
          studentAnswers={studentAnswers}
          onAnswerSelect={onAnswer}
        />
      ) : (
        <MultiAnswer
          answers={answers}
          studentAnswers={studentAnswers}
          onAnswerSelect={onAnswer}
          questionId={props.question._id}
        />
      )}
    </div>
  );
};

export default TestBody;
