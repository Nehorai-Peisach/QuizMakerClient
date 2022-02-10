const SingleAnswer = (props) => {
  return (
    <div className='ans'>
      {props.answers.map((i) => (
        <label class='ans-container'>
          <input type='radio' name='ans' className='ans-input'></input>
          <span class='ans-checkmark radio'></span>
          {i}
        </label>
      ))}
    </div>
  );
};

export default SingleAnswer;
