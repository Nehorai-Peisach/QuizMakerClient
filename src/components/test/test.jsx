import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Login from "./login/login";
import Question from "./quizGo/questionComp";
import { GetQuiz } from 'components/helpers/QuizesRepo';

const Test =  (props) => {
const[isLoged,setIsLoged]=useState(false);
const[student,setStudent]=useState({});
const[score,setScore]=useState(0);
const[completedQuiz, setCompletedQuiz] = useState({});
const[quiz,setQuiz]=useState("s");
const { quizId } = useParams();

const finishQuiz=()=>{
  let tmp={
  Id:'123',
  TopicId:quiz.Topic,
  Name:quiz.Name,
  PassingGrade:quiz.PassingGrade,
  Questions:quiz.Questions,
  Student:student,
  StudentAnswers:[],
  Score:0,
  DoneDate: Date.now(),

}
}
const LogedIn=async(student)=>{
  let tmpQuiz=await GetQuiz(quizId);
  setQuiz(()=>{return tmpQuiz});
    setStudent(student);
    setIsLoged(true);
    
}
console.log(quiz);
  return (
    <div>
        {
        isLoged?
        <Question quizId={quizId} questions={quiz.Questions}/>
        :
        <Login LogedIn={LogedIn}/>
        }
    </div>
  )
}

export default Test