import TextBlock from 'components/publicComponents/textBlock';

const MessagesDetails = (props) => {
  const [onHeaderChange, onMessageFailChange, onMessageSuccessChange] = props.inputs;

  return (
    <div>
      <div className="messages_edtails">
        <TextBlock title="Header: " onMessageChange={onHeaderChange} />
      </div>
      <TextBlock
        title="Message On Success"
        className="messages_edtails__success"
        onMessageChange={onMessageSuccessChange}
      />
      <TextBlock
        title="Message On Failure"
        className="messages_edtails__failure"
        onMessageChange={onMessageFailChange}
      />
    </div>
  );
};

export default MessagesDetails;
