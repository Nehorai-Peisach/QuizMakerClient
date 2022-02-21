const { GetReportByQuiz } = require("../../helpers/ReportRepo");

const ReportByQuiz = (props) => {
  let quiz_id = "62120193c139549bad1f6f7f";
  const bla = async () => {
    let param = {
      params: {
        quiz_id: quiz_id,
        fromDate: new Date(2022, 3, 1).toISOString(),
        toDate: new Date(2022, 7, 1).toISOString(),
      },
    };
    let res= await GetReportByQuiz(param)
    console.log(res);
  };
  return (
    <div>
      <button onClick={bla}>bla</button>
    </div>
  );
};

export default ReportByQuiz;
