import Alerter from 'components/helpers/Alerter';
import { GetUsers } from 'components/helpers/UsersRepo';
import React, { useState } from 'react';
import LoginValidator from './LoginValidator';

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    if (!LoginValidator(username, password)) return;

    let tmpUser = {
      params: {
        username: username,
        password: password,
      },
    };

    const user = await GetUsers(tmpUser);

    user ? props.LogedIn(user) : Alerter('Username or password incorrect!');
  };
  return (
    <div className="loginQuiz">
      <h3>Please enter your details</h3>
      <input type="text" placeholder="Username..." value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder="Password..." value={password} onChange={(event) => setPassword(event.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
