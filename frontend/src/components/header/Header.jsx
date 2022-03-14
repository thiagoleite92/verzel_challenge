import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background-color: #8B4000;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 125px;
    width: 300px;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;;

    label {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 10px;
      padding-right: 10px;
      padding-left: 10px;
    }

    input {
      margin-left: 10px;
      width: 150px;
    }

    div {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin-top: 20px;
    }

    button {
      width: 100px;
      margin-left: 10px;
    }
  }
`;

export default Header;
