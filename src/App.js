import Main from 'components/main/main';
import Navigator from 'components/main/Navigator/navigator';
import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { Route, Routes  } from 'react-router-dom';
import QuizToDo from "./components/test/login/login";

const App = () => {
  const questions = data.questions;
  const navigatorRef = useRef();
  const navigate = (newComp) => {
    navigatorRef.current.move(newComp);
  };

  const mainComp=(  <Main navigate={navigate}>
    <Navigator ref={navigatorRef} />
  </Main>);

  return (
    <div className="App">
      <Routes >
        <Route path="/" element={mainComp}/>
        <Route path={`/doquiz/:quizId`} element={<QuizToDo/>} />
      </Routes >
    </div>
  );
};

export default App;
