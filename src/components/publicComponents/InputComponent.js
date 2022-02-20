import { useEffect, useState } from 'react';

const InputComponent = (props) => {
  const type = props.type ? props.type : 'text';
  const isRequired = props.isRequired ? props.isRequired : true;
  const [input, setInput] = useState('component__input__input green');

  useEffect(() => {
    !isRequired
      ? setInput('component__input__input green')
      : props.value && props.value.length > 0
      ? setInput('component__input__input green')
      : setInput('component__input__input red');
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
