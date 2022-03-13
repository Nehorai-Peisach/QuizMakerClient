import { useState } from 'react';
import FinishedTable from './FinishedTable';

const Finished = (props) => {
  const [isTable, setIsTable] = useState(false);
  return (
    <div>
      {isTable ? (
        <div>
          You got:
          {props.score}
          <FinishedTable quiz={props.quiz} />
        </div>
      ) : (
        <div>
          <div className="student__finish_page">{props.msg}</div>
          {props.quiz && <button onClick={() => setIsTable(true)}>Show results</button>}
        </div>
      )}
    </div>
  );
};

export default Finished;
