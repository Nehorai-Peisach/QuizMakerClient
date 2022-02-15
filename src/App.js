import Main from 'components/main/Main';
import Test from 'components/test/test';
import Tmp from './components/editQuestion/editQuestion';
import data from 'dummydata.json';

const App = () => {
  const questions = data.questions;
  return (
    <div className='App'>
      <Main>
        <Test title='hi' questions={questions} />
        <Tmp />
      </Main>
    </div>
  );
};

export default App;
