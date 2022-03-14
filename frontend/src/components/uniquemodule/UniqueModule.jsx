import styled from 'styled-components';

const UniqueModule = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  height: 400px;
  background-color: #8B4000;
  border: solid 1px black;
  box-shadow: 10px 5px 5px black;
  padding: 20px;

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 300px;
    padding: 20px;
    width: 100%;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    margin-right: 20px;
    max-width: 400px;
  }
  
  .lectures-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    margin-right: 15px;
    text-align: right;
    overflow-wrap: break-word;
    padding: 10px;
    min-width: 200px;
    max-width: 400px;

    &: hover{
      cursor: pointer;
      box-shadow: 10px 5px 5px blue;
    }
  }
`;

export default UniqueModule;
