const SingleAnswer = (props) => {
  return (
    <div className="ans">
      {props.answers.map((answer, index) => (
        <label className="ans-container" key={"answer " + index}>
          <input type="radio" name="ans" className="ans-input"></input>
          <span className="ans-checkmark radio"></span>
          {answer}
        </label>
      ))}
    </div>
  );
};

export default SingleAnswer;
