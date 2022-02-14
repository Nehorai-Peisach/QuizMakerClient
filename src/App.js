import Main from 'components/main/main';
import Test from 'components/test/test';
import Tmp from "./components/newTest/newTest"

const App = () => {
  const questions = [
    { title: 'Question 1', text: 'what?', answers: ['one', 'two', 'three', 'four'], type: 'single' },
    { title: 'Question 2', text: 'when?', answers: ['one', 'two', 'three', 'four'], type: 'multi' },
    { title: 'Question 3', text: 'who?', answers: ['one', 'two', 'three', 'four'], type: 'multi' },
    { title: 'Question 4', text: 'how?', answers: ['one', 'two', 'three', 'four'], type: 'single' },
  ];
  return (
    <div className='App'>
      <Main>
        <Test title='This is Test' questions={questions} />
      </Main>
      <Tmp/>
    </div>
  );
};

export default App;
