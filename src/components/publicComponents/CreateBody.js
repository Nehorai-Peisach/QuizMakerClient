const CreateBody = (props) => {
  return (
    <div className="create_quiz__body">
      <div className="page_header">{props.header}</div>
      <>{props.page}</>
    </div>
  );
};

export default CreateBody;
