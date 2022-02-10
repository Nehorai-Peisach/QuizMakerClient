import MultiAnswer from './multiAnswer';
import SingleAnswer from './singleAnswer';
const TestBody = (props) => {
  return (
    <div className='bd'>
      <h2 className={'bd-title'}>{props.question.title}</h2>
      <h4 className='bd-question'>{props.question.text}</h4>
      {props.question.type == 'single' ? (
        <SingleAnswer answers={props.question.answers} />
      ) : (
        <MultiAnswer answers={props.question.answers} />
      )}
    </div>
  );
};

export default TestBody;
