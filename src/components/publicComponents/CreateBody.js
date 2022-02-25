const CreateBody = (props) => {
  return (
    <div className="create__body">
      <div className="page_header">{props.header}</div>
      <>{props.page}</>
    </div>
  );
};

export default CreateBody;
