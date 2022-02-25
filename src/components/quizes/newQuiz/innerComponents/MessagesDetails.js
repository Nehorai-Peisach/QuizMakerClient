import InputComponent from 'components/publicComponents/InputComponent';
import WysiwygComponent from 'components/publicComponents/wysiwygComponent';

const MessagesDetails = (props) => {
  const [header, setHeader, failMsg, setFailMsg, successMsg, setSuccessMsg] = props.inputs;

  return (
    <div className="create__body__page">
      <div className="messages_edtails">
        <InputComponent value={header} setValue={setHeader}>
          Header :
        </InputComponent>
        <InputComponent value={failMsg} setValue={setFailMsg}>
          Fail Message :
        </InputComponent>
        <InputComponent value={successMsg} setValue={setSuccessMsg}>
          Success Message :
        </InputComponent>
        {/* <WysiwygComponent value={failMsg} setValue={setFailMsg}>
          Fail Message :
        </WysiwygComponent>
        <WysiwygComponent value={successMsg} setValue={setSuccessMsg}>
          Success Message :
        </WysiwygComponent> */}
      </div>
    </div>
  );
};

export default MessagesDetails;
