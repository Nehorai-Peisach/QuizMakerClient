import DropdownComponent from 'components/publicComponents/DropdownComponent';
import WysiwygComponent from 'components/publicComponents/wysiwygComponent';
import InputComponent from 'components/publicComponents/InputComponent';

const FirstSection = (props) => {
  const [type, setType, text, setText, lowerText, setLowerText, tags, setTags] = props.inputs;
  const types = ['single', 'multi'];

  return (
    <div className="create_question__body__page">
      <div className="create_question__body__page__field font__big bold">Quiz Topic: Development</div>
      <DropdownComponent value={type} setValue={setType} items={types}>
        Question Type:
      </DropdownComponent>
      <InputComponent value={text} setValue={setText}>
        Qustion Text :
      </InputComponent>
      <InputComponent value={lowerText} setValue={setLowerText} isRequired={false}>
        Text Below :
      </InputComponent>
      {/* <WysiwygComponent value={text} setValue={setText}>
        Qustion Text :
      </WysiwygComponent>
      <WysiwygComponent value={lowerText} setValue={setLowerText} isRequired={false}>
        Text Below :
      </WysiwygComponent> */}
      <InputComponent value={tags} setValue={setTags} placeholder="Every tag start with #" isRequired={false}>
        Tags:
      </InputComponent>
    </div>
  );
};

export default FirstSection;
