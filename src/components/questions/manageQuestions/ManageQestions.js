import { useEffect, useState } from 'react';
import QuizesTable from './QuestionsTable';
import { DeleteQuestion, GetQuestions } from 'components/helpers/QuestionsRepo';
import Loading from 'components/publicComponents/Loading';
import Alerter from 'components/helpers/Alerter';
import NewQuestion from '../newQuestion/NewQuestion';
import Home from 'components/home/Home';

const ManageQuestions = (props) => {
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
  const editClickHandler = (obj) => {
    props.changeComponent(
      <NewQuestion
        changeComponent={props.changeComponent}
        id={props._id}
        type={obj.type}
        text={obj.text}
        lowerText={obj.lower_text}
        answers={obj.answers}
        tags={'#' + obj.tags.join('#')}
      />
    );
  };
  const duplicateClickHandler = (obj) => {
    props.changeComponent(
      <NewQuestion
        changeComponent={props.changeComponent}
        type={obj.type}
        text={obj.text}
        lowerText={obj.lower_text}
        answers={obj.answers}
        tags={'#' + obj.tags.join('#')}
      />
    );
  };
  const deleteClickHandler = async (obj) => {
    await DeleteQuestion(obj);
    setData(null);
    const objects = await GetQuestions();
    setData(objects);
  };
  const btns = [showClickHandler, editClickHandler, duplicateClickHandler, deleteClickHandler];

  return data ? <QuizesTable data={data} btns={btns} /> : <Loading />;
};

export default ManageQuestions;
