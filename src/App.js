import Main from 'components/main/Main';
import Test from 'components/test/test';
import Tmp from "./components/newTest/newTest";

const App = () => {
  const questions = [
    { title: 'Question 1', text: 'what?', answers: ['one', 'two', 'three', 'four', 'five'], type: 'single' },
    { title: 'Question 2', text: 'when?', answers: ['one', 'two', 'three', 'four'], type: 'multi' },
    { title: 'Question 3', text: 'who?', answers: ['one', 'two', 'three', 'four'], type: 'multi' },
    { title: 'Question 4', text: 'how?', answers: ['one', 'two', 'three', 'four'], type: 'single' },
    { title: 'Question 5', text: 'how?', answers: ['one', 'two', 'three', 'four'], type: 'single' },
    { title: 'Ofek', text: 'Poteto Potato ??', answers: ['yes', 'ok', 'shahur', 'white', 'nigga'], type: 'multi' },
  ];
  return (
    <div className='App'>
      <Main>
        <Test title='hi' questions={questions} />
      </Main>
      <Tmp />
    </div>
  );
};

export default App;
