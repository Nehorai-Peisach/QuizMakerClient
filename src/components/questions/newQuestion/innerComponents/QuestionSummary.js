const QuestionSummary = (props) => {
  const [type, text, lowerText, answers, tags] = props.inputs;
  return (
    <div className="final_page">
      <div>Type: {type}</div>
      <div>Text: {text}</div>
      <div>Lower Text: {lowerText}</div>
      <div>
        Answers:
        {answers.map((x) => (
          <div>{x.text + ' => ' + x.is_correct.toString()}</div>
        ))}
      </div>
      <div>Tags: {'[' + tags.trim().split(',').join('], [').toLowerCase() + ']'}</div>
    </div>
  );
};

export default QuestionSummary;
