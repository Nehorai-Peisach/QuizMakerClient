import MultiAnswer from './multiAnswer';
import SingleAnswer from './singleAnswer';
const TestBody = (props) => {
  return (
    <div className='bd'>
      <h2 className={'bd-title'}>{props.question.title}</h2>
      <h4 className='bd-question'>{props.question.Text}</h4>
      {/* {props.question.Type === 'single' ? ( */}
        <SingleAnswer answers={props.question.Answers} />
      {/* // ) : ( */}
        {/* // <MultiAnswer answers={props.question.Answers} /> */}
      {/* // )} */}
    </div>
  );
};

export default TestBody;
