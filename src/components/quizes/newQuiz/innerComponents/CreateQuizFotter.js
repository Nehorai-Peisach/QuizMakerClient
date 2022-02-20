import { useEffect, useState } from 'react';

const CreateQuizFotter = (props) => {
  const [btn, setBtn] = useState();
  useEffect(() => {
    props.currentStage !== props.stagesNum - 1
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
    <div className="create_quiz__fotter">
      <div className="btn" onClick={props.onPrevios}>
        Previos
      </div>
      <>{btn}</>
    </div>
  );
};

export default CreateQuizFotter;
