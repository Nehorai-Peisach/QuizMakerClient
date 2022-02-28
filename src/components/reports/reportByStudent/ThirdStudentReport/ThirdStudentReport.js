const ThirdStudentReport = (props) => {
  const [selectedQuiz] = props.inputs;

  debugger;
  return (
    <div>
      {selectedQuiz &&
        selectedQuiz.student_answers.map((x) => {
          <div>
            <span>
              Selected:{' '}
              {x.answers.map((a) => (
                <span>{a}</span>
              ))}
            </span>
            <span>
              Answers:{' '}
              {x.question.answers
                .map((a) => (
                  <span>{a}</span>
                ))}
            </span>
          </div>;
        })}
    </div>
  );
};

export default ThirdStudentReport;
