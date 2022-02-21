import { useEffect, useState } from "react";

const TestFotter = (props) => {

  
  const [btn, setBtn] = useState();
  useEffect(() => {

    props.currentStage !== props.questions.length - 1
      ? setBtn(
          <div className="btn" onClick={props.onNext}>
            Next
          </div>
        )
      : setBtn(
          <div className="btn submit" onClick={props.onSubmit}>
            Submit
          </div>
        );
  }, [props.currentStage]);

  return (
    <div className='ft'>
      <hr className='ft-hr' />
      <h4 className='ft-title'>You answered {props.index +1} out of {props.questions.length}</h4>
      <div className='ft-navigator'>
      <div className="btn" onClick={props.onPrevios}>
        Previos
      </div>
      <>{btn}</>
      </div>
    </div>
  );
};

export default TestFotter;
