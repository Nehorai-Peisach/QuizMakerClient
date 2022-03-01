import { useEffect, useState } from 'react';
import QuizesTable from './QuizesTable';
import { DeleteQuiz, GetQuizes } from 'components/helpers/QuizesRepo';
import Loading from 'components/publicComponents/Loading';
import NewQuiz from '../newQuiz/NewQuiz';

const ManageQuizes = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const objects = await GetQuizes();
    setData(objects);
  }, []);

  const linkClickHandler = (id) => {
    let url = `http://localhost:3000/doquiz/${id}`;
    navigator.clipboard.writeText(url);
  };
  const editClickHandler = (obj) => {
    const questionsId = obj.questions.map((q) => q._id);
    props.changeComponent(
      <NewQuiz
        changeComponent={props.changeComponent}
        user={props.user}
        id={obj._id}
        language={obj.language}
        type={obj.type}
        name={obj.name}
        passGrade={obj.passing_grade}
        isShowResult={obj.is_show_result}
        header={obj.header}
        successMsg={obj.success_mgs}
        failMsg={obj.fail_msg}
        questionsId={questionsId}
      />
    );
  };
  const duplicateClickHandler = (obj) => {
    const questionsId = obj.questions.map((q) => q._id);
    props.changeComponent(
      <NewQuiz
        changeComponent={props.changeComponent}
        user={props.user}
        language={obj.language}
        type={obj.type}
        name={obj.name}
        passGrade={obj.passing_grade}
        isShowResult={obj.is_show_result}
        header={obj.header}
        successMsg={obj.success_mgs}
        failMsg={obj.fail_msg}
        questionsId={questionsId}
      />
    );
  };

  const deleteClickHandler = async (obj) => {
    await DeleteQuiz(obj);
    setData(null);
    const objects = await GetQuizes();
    setData(objects);
  };

  const btns = [linkClickHandler, editClickHandler, duplicateClickHandler, deleteClickHandler];

  return data ? <QuizesTable data={data} btns={btns} /> : <Loading />;
};

export default ManageQuizes;
