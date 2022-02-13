import React from "react";
import GeneralTestDetails from "./innerComponents/generalTestDetails";
import PassingTest from "./innerComponents/passingTest";
import FaillingTest from "./innerComponents/faillingTest";

const NewTest = (props) => {
  return (
    <div>
      <GeneralTestDetails />
      <PassingTest />
      <FaillingTest />
    </div>
  );
};

export default NewTest;
