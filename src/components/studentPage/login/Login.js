import { AddStudent } from 'components/helpers/StudentsRepo';
import React, { useState } from 'react';
import LoginValidator from './LoginValidator';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const login = async () => {
    if (!LoginValidator(firstName, lastName, email)) return;

    let tmpStudent = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    const student = await AddStudent(tmpStudent);
    props.LogedIn(student.data);
  };
  return (
    <div className="loginQuiz">
      <h3>Please enter your details</h3>
      <input type="text" placeholder="First name..." onChange={(event) => setFirstName(event.target.value)} />
      <input type="text" placeholder="Last name..." onChange={(event) => setLastName(event.target.value)} />
      <input type="Email" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} />
      <button onClick={login}>Start Quiz</button>
    </div>
  );
};
export default Login;
