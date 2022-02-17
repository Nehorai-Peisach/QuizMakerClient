import Main from 'components/main/main';
import Navigator from 'components/main/Navigator/navigator';
import data from 'dummydata.json';
import Tmp from './components/quizes/newTest/newTest';
import dammyData from './dummydata.json';
import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
const App = () => {
  const questions = data.questions;
  const navigatorRef = useRef();
  const navigate = (newComp) => {
    navigatorRef.current.move(newComp);
  };
  const bla = dammyData.questions;
  return (
    <div className="App">
      <Main navigate={navigate}>
        <Navigator ref={navigatorRef} />
      </Main>
    </div>
  );
};

export default App;
