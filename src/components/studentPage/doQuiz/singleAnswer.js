import { useEffect, useState } from "react";

const SingleAnswer = (props) => {

const[Ui,setUi]=useState(props.studentAnswers);


useEffect(()=>{
  setUi(props.answers)
},[props])

  const onAnswerSelect = (answer,index) => {
    setUi((pre)=>{
      let tmp=[];
      pre.forEach(element => {
        tmp.push(false);
      });
      tmp[index]=true;
      return tmp;
    })
    props.onAnswerSelect([answer]);

  };

  return (
    <div className="ans">
      {props.studentAnswers &&
        props.answers.map((answer, index) => (
          <label className="ans-container" key={'answer ' + index}>
            <input
              type="radio"
              name="ans"
              className="ans-input"
              checked={Ui[index]}
              onChange={() => {
                onAnswerSelect(answer,index);
              }}
            ></input>
            <span className="ans-checkmark radio"></span>
            {answer.text}
          </label>
        ))}
    </div>
  );
};

export default SingleAnswer;
