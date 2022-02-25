import { useEffect, useState } from 'react';

const NextFowordFotter = (props) => {
  const [next, setNext] = useState();
  useEffect(() => {
    props.currentStage !== props.stagesNum - 1
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
    <div className="center">
      <>{previos}</>
      <>{next}</>
    </div>
  );
};

export default NextFowordFotter;
