import Main from 'components/main/main';
import Navigator from 'components/main/Navigator/navigator';
import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizToDo from './components/studentPage/StudentPage';

const App = () => {
  const [user, setUser] = useState();
  // const questions = data.questions;
  const navigatorRef = useRef();
  const navigate = (newComp) => {
    navigatorRef.current.move(newComp);
  };

  const mainComp = (
    <Main setUser={setUser} user={user} navigate={navigate}>
      <Navigator user={user} ref={navigatorRef} />
    </Main>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={mainComp} />
        <Route path={`/doquiz/:quizId`} element={<QuizToDo />} />
      </Routes>
    </div>
  );
};

export default App;
