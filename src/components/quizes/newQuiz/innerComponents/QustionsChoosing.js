import { useEffect, useState } from 'react';
import ChoosingTable from './ChoosingTable';
import { GetQuestions } from 'components/helpers/QuestionsRepo';
import Loading from 'components/publicComponents/Loading';

const QustionsChoosing = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const objects = await GetQuestions();
    setData(objects);
  }, []);

  const showClickHandler = (obj) => {
    console.log(obj);
  };
  const checkClickHandler = (element, obj) => {
    debugger;
    if (element.className === '') {
      props.onQuestionSelect(true, obj);
      element.className = 'table__body__selected';
    } else {
      props.onQuestionSelect(false, obj);
      element.className = '';
    }
    console.log(element);
  };

  const btns = [showClickHandler, checkClickHandler];

  return data ? <ChoosingTable data={data} btns={btns} /> : <Loading />;
};

export default QustionsChoosing;
