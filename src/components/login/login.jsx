import axios from "axios";
import React, { useState } from "react";
const uuid=require('uuid')

const LoginSystem = (props) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const login = () => {
   if(email&&firstName&&lastName){
    let tmp = {
      Id: uuid.v4(),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
    };
    axios.post('http://localhost:4000/api/students/addstudent',tmp);
//go to actual test

}else{
    alert("Please enter ALL the fields.")
}
  };

  return (
    <div className="loginQuiz">
      <h3>Please enter your details</h3>
      <input
        type="text"
        placeholder="First name..."
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last name..."
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="Email"
        placeholder="Email..."
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={login}>Start Quiz</button>
    </div>
  );
};
export default LoginSystem;
