import React, { useState } from 'react';
import LoginButton from './LoginButton';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLoginForm = ({ target }) => {
    const { name, value } = target;

    setLoginForm((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const { email, password } = loginForm;

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
      </label>
      <div>
        <LoginButton loginForm={loginForm} />
        <button type="button" disabled>
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
