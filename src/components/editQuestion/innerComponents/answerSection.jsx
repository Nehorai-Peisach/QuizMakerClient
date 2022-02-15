import React, { useEffect, useRef, useState } from "react";
import Answer from "./answer";
import "../../../styles/editQuestion/innerStyles/answerSection.css";

const AnswerSection = (props) => {
  const [answersState, setAnswersState] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const answersListRef = useRef({});
  answersListRef.current = answersList;
  useEffect(() => {
    let tmpArr = [];
    let tmpArrForList = [];
    for (let i = 0; i < 3; i++) {
      let tmpAnswer = (
        <Answer
          onIsCorrectChange={onIsCorrectChange}
          onTextChange={onTextChange}
          myIndex={i}
          title={`option ${i + 1}`}
          key={i}
          // RemoveAnswer={RemoveAnswer}
        />
      );
      let tmpAnswerForList = {
        id: i,
        text: "",
        isCorrect: false,
      };
      tmpArr.push(tmpAnswer);
      tmpArrForList.push(tmpAnswerForList);
    }
    console.log(tmpArrForList);
    setAnswersState([...tmpArr]);
    setAnswersList(() => {
      return [...tmpArrForList];
    });
  }, []);

  const AddAnswer = () => {
    let length = answersList.length;
    let tmpanswer = (
      <Answer
        onIsCorrectChange={onIsCorrectChange}
        onTextChange={onTextChange}
        myIndex={length}
        title={`option ${length + 1}`}
        key={length}
        // RemoveAnswer={RemoveAnswer}
      />
    );
    let tmpAnswerForList = {
      id: length,
      text: "",
      isCorrect: false,
    };
    let tmpList = answersList;
    tmpList.push(tmpAnswerForList);
    setAnswersState((prevState) => {
      return [...prevState, tmpanswer];
    });
    setAnswersList([...tmpList]);
  };
  // const RemoveAnswer = (index) => {
  //   let tmpArr = answersState;
  //   tmpArr.splice(index, 1);
  //   setAnswersState([...tmpArr]);
  // };

  useEffect(() => {
    props.onAnswersListChange(answersList);
  }, [answersList]);

  const onIsCorrectChange = (NewIsCorrect, index) => {
    let tmparr = answersListRef.current;
    tmparr[index].isCorrect = NewIsCorrect;
    setAnswersList([...tmparr]);
  };
  const onTextChange = (NewText, index) => {
    let tmparr = answersListRef.current;
    tmparr[index].text = NewText;
    setAnswersList([...tmparr]);
  };
  return (
    <div>
      {answersState}
      <button onClick={AddAnswer}>Add option</button>
    </div>
  );
};

export default AnswerSection;
