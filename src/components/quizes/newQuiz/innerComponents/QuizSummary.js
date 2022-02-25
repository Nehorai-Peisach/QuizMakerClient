const QuizSummary = (props) => {
  const [language, type, name, passGrade, header, successMsg, failMsg, questionsId, isShowResult] = props.inputs;
  return (
    <div className="final_page">
      <div>Language: {language}</div>
      <div>Type: {type}</div>
      <div>Name: {name}</div>
      <div>Pass Grade: {passGrade}</div>
      <div>Header: {header}</div>
      <div>Message On Success: {successMsg}</div>
      <div>Message On Fail: {failMsg}</div>
      <div>Questions Amount: {questionsId.length}</div>
      <div>To Show Answers After: {isShowResult.toString()}</div>
    </div>
  );
};

export default QuizSummary;
