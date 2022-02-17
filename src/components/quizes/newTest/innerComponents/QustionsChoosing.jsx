import React, { useEffect, useState } from 'react'

import { GetQuestions } from 'components/helpers/QuestionsRepo';

const QustionsChoosing = (props) => {
    const [data, setData] = useState();
 
    useEffect(async () => {
        const tmp = await GetQuestions();
        setData(tmp);
      }, []);
  return (
    <div>
        <h4 className="qustionChoosing_mainTitle">Qustions</h4>


    </div>
  )
}

export default QustionsChoosing