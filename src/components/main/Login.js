import Alerter from 'components/helpers/Alerter';
import { GetUsers } from 'components/helpers/UsersRepo';
import Loading from 'components/publicComponents/Loading';
import React, { useEffect, useState } from 'react';
import LoginValidator from './LoginValidator';

const Login = (props) => {
  const [isLoding, setIsLoding] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const login = async () => {
    setIsLoding(true);
    if (!LoginValidator(username, password)) return;

    let tmpUser = {
      params: {
        username: username,
        password: password,
      },
    };

    const user = await GetUsers(tmpUser);

    user ? props.LogedIn(user) : Alerter('Username or password incorrect!');
    setIsLoding(false);
  };

  return (
    <div>
      {isLoding ? (
        <Loading />
      ) : (
        <div className="loginQuiz">
          <h3>Please enter your details</h3>
          <input type="text" placeholder="Username..." value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type="password" placeholder="Password..." value={password} onChange={(event) => setPassword(event.target.value)} />
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
