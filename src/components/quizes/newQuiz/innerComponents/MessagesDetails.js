import InputComponent from 'components/publicComponents/InputComponent';
import WysiwygComponent from 'components/publicComponents/wysiwygComponent';

const MessagesDetails = (props) => {
  const [header, setHeader, failMsg, setFailMsg, successMsg, setSuccessMsg] = props.inputs;

  return (
    <div className="create_quiz__body__page">
      <div className="messages_edtails">
        <InputComponent value={header} setValue={setHeader}>
          Header :
        </InputComponent>
        <WysiwygComponent value={failMsg} setValue={setFailMsg}>
          Fail Message :
        </WysiwygComponent>
        <WysiwygComponent value={successMsg} setValue={setSuccessMsg}>
          Success Message :
        </WysiwygComponent>
      </div>
    </div>
  );
};

export default MessagesDetails;
