import React, { useEffect, useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

export default function Index() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      const localUser = JSON.parse(localStorage.getItem('user'));
      setUserInfo(localUser);
    };
    fetchUserInfo();
  }, []);

  return (
    <Header>
      <h1>Master - Web Developer Plus</h1>
      {
        userInfo
          ? 'Informações do usuário'
          : <LoginForm />
      }
    </Header>
  );
}
