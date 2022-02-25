import { useEffect, useState } from 'react';
import ChoosingTable from './ChoosingTable';
import { GetQuestions } from 'components/helpers/QuestionsRepo';
import Loading from 'components/publicComponents/Loading';
import Alerter from 'components/helpers/Alerter';

const QustionsChoosing = (props) => {
  const [questionsId, addQuestionId, removeQuestionId] = props.inputs;
  const [data, setData] = useState();

  useEffect(async () => {
    const objects = await GetQuestions();
    setData(objects);
  }, []);

  const showClickHandler = (obj) => {
    Alerter(
      `Type: ${obj.type}\nText: ${obj.text}\nLower Text: ${obj.lower_text}\nAnswers: ${obj.answers.map(
        (q) => `\n${q.text} => ${q.is_correct}`
      )}\nTags: ${obj.tags}`
    );
  };

  return data ? (
    <ChoosingTable
      data={data}
      showClickHandler={showClickHandler}
      questionsId={questionsId}
      addQuestionId={addQuestionId}
      removeQuestionId={removeQuestionId}
    />
  ) : (
    <Loading />
  );
};

export default QustionsChoosing;
