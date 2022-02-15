import Main from "components/main/Main";
import Navigator from "components/Navigator/navigator";
import data from 'dummydata.json';
import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
const App = () => {
  
  const questions = data.questions;
  const questions = [
    {
      title: "Question 1",
      text: "what?",
      answers: ["one", "two", "three", "four", "five"],
      type: "single",
    },
    {
      title: "Question 2",
      text: "when?",
      answers: ["one", "two", "three", "four"],
      type: "multi",
    },
    {
      title: "Question 3",
      text: "who?",
      answers: ["one", "two", "three", "four"],
      type: "multi",
    },
    {
      title: "Question 4",
      text: "how?",
      answers: ["one", "two", "three", "four"],
      type: "single",
    },
    {
      title: "Question 5",
      text: "how?",
      answers: ["one", "two", "three", "four"],
      type: "single",
    },
    {
      title: "Ofek",
      text: "Poteto Potato ??",
      answers: ["yes", "ok", "shahur", "white", "nigga"],
      type: "multi",
    },
  ];
  const navigatorRef = useRef();
  const navigate=(newComp)=>{
navigatorRef.current.move(newComp);
  }
  // navigator={navigatorRef.current.func}
  return (
    <div className="App">
      <Main navigate={navigate}>
        <Navigator ref={navigatorRef} />
      </Main>
    </div>
  );
};

export default App;
