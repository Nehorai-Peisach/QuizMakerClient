const CreateQuizFotter = (props) => {
  return (
    <div className="create_quiz__fotter">
      <button onClick={props.onPrevios}>pre</button>
      <button onClick={props.onNext}>next</button>
    </div>
  );
};

export default CreateQuizFotter;
