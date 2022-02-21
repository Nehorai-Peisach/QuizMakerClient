import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "./login/login";
import Question from "./quizGo/questionComp";
import { GetQuiz } from "components/helpers/QuizesRepo";
import { SubmitQuiz } from "components/helpers/QuizesRepo";

const Test = (props) => {
  const { quizId } = useParams();
  const [isLoged, setIsLoged] = useState(false);
  const [student, setStudent] = useState({});
  const [student_answers, setStudent_answers] = useState([]);
  // const [completedQuiz, setCompletedQuiz] = useState({});
  const [quiz, setQuiz] = useState({});

  useEffect(async () => {
    let tmpQuiz = await GetQuiz(quizId);
    setQuiz(() => {
      return tmpQuiz;
    });
  }, []);

  const culculateScore = () => {
    let questions = quiz.questions;
    let answers = student_answers;
    let tmpCorrectAns = 0;
    answers.forEach((ans) => {
      let question = questions.find((q) => q._id === ans.question_id);
      if (question.type === "single") {
        if (ans.answers.is_correct) {
          tmpCorrectAns += 1;
        }
      } else {
        let numOfCorrectAns = 0;
        question.answers.forEach((a) => {
          if (a.is_correct) {
            numOfCorrectAns += 1;
          }
        });
        if (ans.answers.length === numOfCorrectAns) {
          let tmpICorrect = true;
          ans.answers.forEach((a) => {
            tmpICorrect = tmpICorrect && a.is_correct;
          });
          if (tmpICorrect) {
            tmpCorrectAns += 1;
          }
        }
      }
    });
    return tmpCorrectAns * (100 / questions.length);
  };

  const finishQuiz = () => {
    let tmpScore = culculateScore();
    let tmp = {
      quiz_id: quiz._id,
      student_id: student.Id,
      student_answers: student_answers,
      score: tmpScore,
      date: Date.now(),
    };
    SubmitQuiz(tmp);
  };
  const onStudentAnswersChange = (studentAnswer) => {
    console.log(studentAnswer);
    if (studentAnswer) {
      let tmpList = student_answers;
      if (tmpList.find((s) => s.question_id === studentAnswer.question_id)) {
        tmpList.splice(
          tmpList.findIndex((a) => a.question_id === studentAnswer.question_id),
          1
        );
      }
      tmpList.push(studentAnswer);
      setStudent_answers(tmpList);
    }
  };
  const LogedIn = async (student) => {
    setStudent(student);
    setIsLoged(true);
  };
  console.log(quiz);
  return (
    <div>
      {isLoged ? (
        <Question
          questions={quiz.questions}
          onSubmitPressed={finishQuiz}
          onStudentAnswersChange={onStudentAnswersChange}
        />
      ) : (
        <Login LogedIn={LogedIn} />
      )}
    </div>
  );
};

export default Test;
