import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetQuiz } from 'components/helpers/QuizesRepo';
import { SubmitQuiz } from 'components/helpers/ComplitedQuizesRepo';
import QuestionsComponent from './doQuiz/questionComp';
import Login from './login/Login';

const StudentPage = (props) => {
  const { quizId } = useParams();
  const [isLoged, setIsLoged] = useState(false);
  const [student, setStudent] = useState();
  const [quiz, setQuiz] = useState({});
  const [finish, setFinish] = useState();
  useEffect(async () => {
    const tmpQuiz = await GetQuiz(quizId);
    setQuiz(tmpQuiz);
  }, []);

  const finishQuiz = async (studentAnswers) => {
    const tmpQuiz = {
      quiz: quiz,
      student: student,
      studentAnswers: studentAnswers,
    };
    const res = await SubmitQuiz(tmpQuiz);
    setFinish(res.data);
  };

  const LogedIn = (student) => {
    setStudent(student);
    setIsLoged(true);
  };

  return (
    <div>
      {isLoged ? (
        finish ? (
          <div className="student__finish_page">{finish}</div>
        ) : (
          <QuestionsComponent quiz={quiz} onSubmit={finishQuiz} />
        )
      ) : (
        <Login LogedIn={LogedIn} />
      )}
    </div>
  );
};

export default StudentPage;
