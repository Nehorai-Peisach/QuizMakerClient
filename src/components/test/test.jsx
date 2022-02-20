import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "./login/login";
import Question from "./quizGo/questionComp";
import { GetQuiz } from "components/helpers/QuizesRepo";

const Test = (props) => {
  const [isLoged, setIsLoged] = useState(false);
  const [student, setStudent] = useState({});
  const [student_answers, setStudent_answers] = useState([]);

  // const [score, setScore] = useState(0);
  // const [completedQuiz, setCompletedQuiz] = useState({});
  const [quiz, setQuiz] = useState({});
  const { quizId } = useParams();

  useEffect(async () => {
    let tmpQuiz = await GetQuiz(quizId);
    setQuiz(() => {
      return tmpQuiz;
    });
  }, []);

  const finishQuiz = () => {
    let tmp = {
      quiz_id: quiz._id,
      student_id: student.Id,
      student_answers: student_answers,
      score: 0,
      date: Date.now(),
    };
    console.log(tmp);
  };
  const onStudentAnswersChange = (studentAnswer) => {
    debugger;
    let tmpList = student_answers;
    if (tmpList.find((s) => s.question_id === studentAnswer.question_id)) {
      tmpList.splice(
        tmpList.findIndex((a) => a.question_id === studentAnswer.question_id),
        1
      );
    }
    tmpList.push(studentAnswer);
    setStudent_answers(tmpList);
  };
  const LogedIn = async (student) => {
    setStudent(student);
    setIsLoged(true);
  };
  return (
    <div>
      {isLoged ? (
        <Question
          questions={quiz.questions}
          finishQuiz={finishQuiz}
          onStudentAnswersChange={onStudentAnswersChange}
        />
      ) : (
        <Login LogedIn={LogedIn} />
      )}
    </div>
  );
};

export default Test;
