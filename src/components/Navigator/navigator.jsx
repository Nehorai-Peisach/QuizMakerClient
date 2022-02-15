import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import NewTest from "components/newTest/newTest";
import EditQuestion from "components/editQuestion/editQuestion";

const Navigator = forwardRef((props, ref) => {
  const [choosenComponent, setChoosenComponent] = useState();

  useImperativeHandle(ref, () => ({
    move(newComp) {
      changeComponent(newComp);
    },
  }));
  const changeComponent = (newComp) => {
    switch (newComp) {
      case "Home":
        setChoosenComponent(<NewTest />);
        break;
      case "Quizes":
        setChoosenComponent(<EditQuestion />);
        break;
    }
  };
  return <div>{choosenComponent}</div>;
});

export default Navigator;
