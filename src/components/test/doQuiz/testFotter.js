import { useEffect, useState } from 'react';

const TestFotter = (props) => {
  const [next, setNext] = useState();
  useEffect(() => {
    props.currentStage !== props.questions.length - 1
      ? setNext(
          <div className="btn" onClick={props.onNext}>
            Next
          </div>
        )
      : setNext(
          <div className="btn submit" onClick={props.onSubmit}>
            Submit
          </div>
        );
  }, [props.currentStage]);

  const [previos, setPrevios] = useState();
  useEffect(() => {
    props.currentStage > 0
      ? setPrevios(
          <div className="btn" onClick={props.onPrevios}>
            Previos
          </div>
        )
      : setPrevios(<div className="btn unclickable">Previos</div>);
  }, [props.currentStage]);

  return (
    <div className="ft">
      <hr className="ft-hr" />
      <h4 className="ft-title">
        You answered {props.currentStage + 1} out of {props.questions.length}
      </h4>
      <div className="ft-navigator">
        <>{previos}</>
        <>{next}</>
      </div>
    </div>
  );
};

export default TestFotter;
