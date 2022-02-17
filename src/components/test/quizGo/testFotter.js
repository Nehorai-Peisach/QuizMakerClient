const TestFotter = (props) => {
  console.log(props.questions);
  return (
    <div className='ft'>
      <hr className='ft-hr' />
      <h4 className='ft-title'>You answered {props.index +1} out of {props.questions.length}</h4>
      <div className='ft-navigator'>
        <button onClick={()=>props.previosQuestion(props.index)} >Back</button>
        <button onClick={()=>props.nextQuestion(props.index)} >Next</button>
      </div>
    </div>
  );
};

export default TestFotter;
