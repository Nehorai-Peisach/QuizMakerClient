import { useEffect, useState } from 'react';

const DropdownComponent = (props) => {
  const [input, setInput] = useState('component__dropdown__dropdown green');
  const isRequired = props.isRequired ? props.isRequired : true;

  useEffect(() => {
    !isRequired
      ? setInput('component__dropdown__dropdown green')
      : props.value && props.value.length > 0
      ? setInput('component__dropdown__dropdown green')
      : setInput('component__dropdown__dropdown red');
  }, [props.value]);

  return (
    <div className="component">
      <label for={props.for} className="component__dropdown__text">
        {props.children}
      </label>
      <select className={input} value={props.value} onChange={(input) => props.setValue(input.target.value)}>
        <option value="" disabled selected>
          Select one
        </option>
        {props.items.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
