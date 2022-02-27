import TestHeader from './testHeader';
import TestBody from './testBody';
import TestFotter from './testFotter';
import { useEffect, useState } from 'react';

const QuestionsComponent = (props) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [studentAnswers, setStudentAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState();

  useEffect(() => {
    setCurrentAnswer(studentAnswers[currentStage]);
  }, [studentAnswers, currentStage]);

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
    props.quiz.questions[currentStage].answers.forEach((x, i) => {
      studentAnswer.answers.forEach((answer) => {
        setStudentAnswers((pre) => {
          pre[currentStage].forEach((x) => (x = false));
          return pre;
        });
        if (x._id === answer._id) {
          setStudentAnswers((pre) => {
            pre[currentStage][i] = true;
            return pre;
          });
        }
      });
    });
  };

  const nextQuestion = () => {
    setCurrentStage((prevState) => {
      return prevState + 1;
    });
  };
  const previosQuestion = () => {
    if (currentStage > 0) {
      setCurrentStage((prevState) => {
        return prevState - 1;
      });
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
    <div>
      <TestHeader header={props.quiz.header} />
      <TestBody question={props.quiz.questions[currentStage]} answers={currentAnswer} onAnswer={onAnswer} />
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
