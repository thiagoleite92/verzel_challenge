import React, { useState } from 'react';

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
        <button type="submit">
          Login
        </button>
        <button type="button">
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
