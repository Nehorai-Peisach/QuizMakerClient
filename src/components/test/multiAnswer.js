const MultiAnswer = (props) => {
  debugger;
  return (
    <div className='ans'>
      {props.answers.map((i) => (
        <label class='ans-container'>
          <input type='checkbox' name='ans' className='ans-input'></input>
          <span class='ans-checkmark checkbox'></span>
          {i}
        </label>
      ))}
    </div>
  );
};

export default MultiAnswer;
