import { format } from 'date-fns';

const ReportQuizSummary = (props) => {
  const dateFormat = (date) => format(new Date(date), 'dd/MM/yy');
  const average = (arr) => Math.ceil(arr.reduce((a, b) => a + b, 0) / arr.length);

  const [quiz, allComplited, fromDate, toDate, any] = props.data;
  const Passed = allComplited.filter((x) => x.score >= quiz.passing_grade).length;
  const present = Math.ceil((Passed * 100) / allComplited.length);
  const grades = allComplited.map((x) => x.score);

  return (
    <div className="center">
      <div className="reports__quiz__summary">
        <span>Quiz Name: {quiz.name}</span>
        <span>Quiz Id: {quiz._id}</span>
        <span>Quiz Type: {quiz.type}</span>
        <span>Number of Questions: {quiz.questions.length}</span>
        <span>Passing Grade: {quiz.passing_grade}</span>
        {any === true ? <span>Date Range: All Times</span> : <span>Date Range: {dateFormat(fromDate) + ' - ' + dateFormat(toDate)}</span>}
        <span>Number of Submissions: {allComplited.length}</span>
        <span>Number of Students Passed: {Passed}</span>
        <span>Passing Present: {present}%</span>
        <span>Avrege Grade: {average(grades)}</span>
      </div>
    </div>
  );
};

export default ReportQuizSummary;
