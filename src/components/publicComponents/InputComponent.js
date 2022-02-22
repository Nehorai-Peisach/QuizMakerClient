import { useEffect, useState } from 'react';

const InputComponent = (props) => {
  const value = props.value;
  const type = props.type ? props.type : 'text';
  const limit = props.limit ? props.limit : 100;
  const isRequired = props.isRequired !== undefined ? props.isRequired : true;
  const [input, setInput] = useState('component__input__input green');

  useEffect(() => {
    let input = '';
    isRequired
      ? type === 'number'
        ? value && value > 0 && value <= limit
          ? (input = 'component__input__input green')
          : (input = 'component__input__input red')
        : value && value.length > 0
        ? (input = 'component__input__input green')
        : (input = 'component__input__input red')
      : (input = 'component__input__input green');

    setInput(input);
  }, [props.value]);

  return (
    <div className="component">
      <label for={props.for} className="component__input__text">
        {props.children}
      </label>
      <span>
        <input
          className={input}
          value={props.value}
          onChange={(input) => props.setValue(input.target.value)}
          placeholder={props.placeholder}
          id={props.for}
          type={type}
        />
      </span>
    </div>
  );
};

export default InputComponent;
