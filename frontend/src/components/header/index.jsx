import React from 'react';
import Header from './Header';

export default function index() {
  return (
    <Header>
      <h1>Master - Web Developer Plus</h1>
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
    </Header>
  );
}
