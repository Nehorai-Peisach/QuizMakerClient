import DropdownComponent from 'components/publicComponents/DropdownComponent';
import InputComponent from 'components/publicComponents/InputComponent';
import SwitchComponent from 'components/publicComponents/SwitchComponent';

const GeneralDetails = (props) => {
  const [language, setLanguagee, type, setType, name, setName, passGrade, setPassGrade, isShowResult, setIsShowResult] = props.inputs;

  const Languages = ['English', 'Hebrew'];
  const types = ['random-orderd', 'pre-orderd'];
  return (
    <div className="create_quiz__body__page">
      <div className="create_quiz__body__page__field font__big bold">Quiz Topic: Development</div>
      <DropdownComponent value={language} setValue={setLanguagee} items={Languages}>
        Quiz Language:
      </DropdownComponent>
      <DropdownComponent value={type} setValue={setType} items={types}>
        Quiz Type:
      </DropdownComponent>
      <InputComponent value={name} setValue={setName} placeholder="Enter Quiz name">
        Quiz Name:
      </InputComponent>
      <InputComponent value={passGrade} setValue={setPassGrade} type="number" placeholder="Enter numbers 1 - 100">
        Quiz Passing Grade:
      </InputComponent>
      <SwitchComponent value={isShowResult} setValue={setIsShowResult}>
        Show correct answer after submmision:
      </SwitchComponent>
    </div>
  );
};

export default GeneralDetails;
