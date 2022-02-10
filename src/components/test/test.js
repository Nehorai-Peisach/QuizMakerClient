import 'styles/test/test.css';
import TestHeader from './testHeader';
import TestBody from './testBody';
import TestFotter from './testFotter';

const Test = (props) => {
  return (
    <div>
      <TestHeader title={props.title} />
      <TestBody question={props.questions[0]} />
      <TestFotter questions={props.questions} />
    </div>
  );
};

export default Test;
