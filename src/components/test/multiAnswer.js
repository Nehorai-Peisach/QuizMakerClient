const MultiAnswer = (props) => {
  return (
    <div className="ans">
      {props.answers.map((answer, index) => (
        <label className="ans-container" key={"answer " + index}>
          <input type="checkbox" name="ans" className="ans-input"></input>
          <span className="ans-checkmark checkbox"></span>
          {answer}
        </label>
      ))}
    </div>
  );
};

export default MultiAnswer;
