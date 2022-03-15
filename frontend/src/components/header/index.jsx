import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import DisplayUserInfo from './DisplayUserInfo';
import Header from './Header';
import LoginForm from './LoginForm';

export default function Index() {
  const { userInfo } = useContext(MainContext);

  return (
    <Header>
      <h1>Master - Web Developer Plus</h1>
      {
        userInfo
          ? <DisplayUserInfo userInfo={userInfo} />
          : <LoginForm />
      }
    </Header>
  );
}
