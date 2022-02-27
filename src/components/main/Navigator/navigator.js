import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import NewQuiz from 'components/quizes/newQuiz/NewQuiz';
import Home from 'components/home/Home';
import ManageQuizes from 'components/quizes/manageQuizes/ManageQuizes';
import ManageQuestions from 'components/questions/manageQuestions/ManageQestions';
import NewQuestion from 'components/questions/newQuestion/NewQuestion';
import ReportByStudent from 'components/reports/reportByStudent/main';
import ReportByQuiz from 'components/reports/reportByQuiz/main';
import Loading from 'components/publicComponents/Loading';

const Navigator = forwardRef((props, ref) => {
  const [choosenComponent, setChoosenComponent] = useState(<Home />);

  useImperativeHandle(ref, () => ({
    move(newComp) {
      changeComponent(newComp);
    },
  }));
  const changeComponent = (newComp) => {
    switch (newComp) {
      case 'Home':
        setChoosenComponent(<Home changeComponent={setChoosenComponent} />);
        break;
      case 'Manage Quizes':
        setChoosenComponent(<ManageQuizes changeComponent={setChoosenComponent} />);
        break;
      case 'Create Quiz':
        setChoosenComponent(<NewQuiz changeComponent={setChoosenComponent} />);
        break;
      case 'Manage Questions':
        setChoosenComponent(<ManageQuestions changeComponent={setChoosenComponent} />);
        break;
      case 'Create Question':
        setChoosenComponent(<NewQuestion changeComponent={setChoosenComponent} />);
        break;
      case 'Report By Quiz':
        setChoosenComponent(<ReportByQuiz changeComponent={setChoosenComponent} />);
        break;
      case 'Report By Student':
        setChoosenComponent(<ReportByStudent changeComponent={setChoosenComponent} />);
        break;
      default:
        setChoosenComponent(<Home changeComponent={setChoosenComponent} />);
        break;
    }
  };
  return choosenComponent ? <div className="navigator_rapper">{choosenComponent}</div> : <Loading />;
});

export default Navigator;
