import React, { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import { validEmail, validPassword } from '../../utils/validations';
import InfoWarning from './InfoWarning';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [statusLoginButton, setStatusLoginButton] = useState(true);

  const { email, password } = loginForm;

  const handleLoginForm = ({ target }) => {
    const { name, value } = target;

    setLoginForm((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const validInformation = () => ((validEmail(email) && validPassword(password))
      ? setStatusLoginButton(false)
      : setStatusLoginButton(true));
    validInformation();
  }, [email, password]);

  return (
    <form action="submit">
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          name="email"
          required
          onChange={(e) => handleLoginForm(e)}
          value={email}
        />
        {
          validEmail(email)
            ? null
            : <InfoWarning text="Insert email" />
        }
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          required
          onChange={(e) => handleLoginForm(e)}
          value={password}
        />
        {
          validPassword(password)
            ? null
            : <InfoWarning text="Insert password" />
        }
      </label>
      <div>
        <LoginButton loginForm={loginForm} statusLoginButton={statusLoginButton} />
        <button type="button">
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
