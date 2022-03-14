import React from 'react';

function LoginForm() {
  return (
    <form action="submit">
      <label htmlFor="email">
        E-mail
        <input type="text" name="email" />
      </label>
      <label htmlFor="name" name="name">
        Password
        <input type="text" />
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
