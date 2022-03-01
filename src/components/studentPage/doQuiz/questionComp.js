import TestHeader from './testHeader';
import TestBody from './testBody';
import TestFotter from './testFotter';
import { useEffect, useState } from 'react';

const QuestionsComponent = (props) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [studentAnswers, setStudentAnswers] = useState([]);

  useEffect(() => {
    const tmpall = [];
    props.quiz.questions.forEach((question) => {
      const tmp = [];
      question.answers.forEach(() => {
        tmp.push(false);
      });
      tmpall.push(tmp);
    });
    setStudentAnswers(tmpall);
  }, []);

  const onAnswer = (studentAnswer) => {
    setStudentAnswers((pre) =>
      pre.map((x, i) => {
        if (props.quiz.questions[i]._id === studentAnswer.question_id) return studentAnswer.answers;
        else return x;
      })
    );
  };

  const nextQuestion = () => {
    setCurrentStage((prevState) => prevState + 1);
  };
  const previosQuestion = () => {
    if (currentStage > 0) {
      setCurrentStage((prevState) => prevState - 1);
    }
  };

  const submitQuiz = () => {
    const arr = [];
    props.quiz.questions.forEach((question, index) => {
      const answers = [];
      studentAnswers[index].forEach((x, i) => {
        if (x) answers.push(question.answers[i]);
      });
      const tmp = {
        question_id: question._id,
        answers: answers,
      };
      arr.push(tmp);
    });

    props.onSubmit(arr);
  };

  return (
    <div className="student_page">
      <TestHeader header={props.quiz.header} />
      <TestBody question={props.quiz.questions[currentStage]} studentAnswers={studentAnswers[currentStage]} onAnswer={onAnswer} />
      <TestFotter
        onNext={nextQuestion}
        onPrevios={previosQuestion}
        onSubmit={submitQuiz}
        currentStage={currentStage}
        stagesNum={props.quiz.questions.length}
      />
    </div>
  );
};

export default QuestionsComponent;
