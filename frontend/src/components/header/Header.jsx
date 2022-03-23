import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background-color: #8B4000;
  margin-bottom: 25px;
  border-bottom: solid 3px black;

  form {
    display: flex;
    flex-direction: column;
    height: 125px;
    width: 500px;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;

    label {
      display: flex;
      justify-content: flex-between;
      margin-top: 10px;
      margin-right: 10px;
      padding: 0 10px;
    }
    
    input {
      width: 175px;
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
