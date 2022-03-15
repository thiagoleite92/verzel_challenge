import styled from 'styled-components';

const ListModules = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 400px;
  width: 1000px;
  background-color: #8B4000;
  border: solid 1px black;
  box-shadow: 10px 5px 5px black;
  
  a {
    color: black;
    text-decoration: none;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 300px;
    padding: 20px;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    transition: transform 300ms ease-in-out;

    &: hover{
      cursor: pointer;
      box-shadow: 10px 5px 5px blue;
    }
  }
`;

export default ListModules;
