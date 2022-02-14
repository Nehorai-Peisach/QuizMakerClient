const TestFotter = (props) => {
  return (
    <div className='ft'>
      <hr className='ft-hr' />
      <h4 className='ft-title'>You answered 2 out of {props.questions.length}</h4>
      <div className='ft-navigator'></div>
    </div>
  );
};

export default TestFotter;
