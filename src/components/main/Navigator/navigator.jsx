import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import NewTest from 'components/quizes/newTest/newTest';
import Home from 'components/home/Home';
import ManageQuizes from 'components/quizes/manageQuizes/ManageQuizes';
import ManageQustions from 'components/questions/manageQuestions/ManageQustions';
import EditQuestion from 'components/questions/editQuestion/editQuestion';
import ReportByStudent from 'components/reports/reportByStudent/ReportByStudent';
import ReportByQuiz from 'components/reports/reportByQuiz/ReportByQuiz';

const Navigator = forwardRef((props, ref) => {
  const [choosenComponent, setChoosenComponent] = useState();

  useImperativeHandle(ref, () => ({
    move(newComp) {
      changeComponent(newComp);
    },
  }));
  const changeComponent = (newComp) => {
    switch (newComp) {
      case 'Home':
        setChoosenComponent(<Home />);
        break;
      case 'Manage Quizes':
        setChoosenComponent(<ManageQuizes />);
        break;
      case 'Create Quiz':
        setChoosenComponent(<NewTest />);
        break;
      case 'Manage Questions':
        setChoosenComponent(<ManageQustions />);
        break;
      case 'Create Question':
        setChoosenComponent(<EditQuestion />);
        break;
      case 'Report By Quiz':
        setChoosenComponent(<ReportByQuiz />);
        break;
      case 'Report By Student':
        setChoosenComponent(<ReportByStudent />);
        break;
      default:
        setChoosenComponent(<Home />);
        break;
    }
  };
  return <div className='navigator_rapper'>{choosenComponent}</div>;
});

export default Navigator;
