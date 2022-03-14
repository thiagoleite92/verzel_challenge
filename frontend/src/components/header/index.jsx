import React, { useEffect, useState } from 'react';
import DisplayUserInfo from './DisplayUserInfo';
import Header from './Header';
import LoginForm from './LoginForm';

export default function Index() {
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      const localUser = JSON.parse(localStorage.getItem('user'));
      setLoggedUserInfo(localUser);
    };
    fetchUserInfo();
  }, []);

  return (
    <Header>
      <h1>Master - Web Developer Plus</h1>
      {
        loggedUserInfo
          ? <DisplayUserInfo loggedUserInfo={loggedUserInfo} />
          : <LoginForm />
      }
    </Header>
  );
}
