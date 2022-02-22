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

  return data ? <ChoosingTable data={data} showClickHandler={showClickHandler} onQuestionsId={props.onQuestionsId} /> : <Loading />;
};

export default QustionsChoosing;
