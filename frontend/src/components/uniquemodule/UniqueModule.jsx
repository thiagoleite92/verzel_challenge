import styled from 'styled-components';

const UniqueModule = styled.main`
  display: flex;
  align-items: center;
  margin: auto;
  height: 400px;
  width: 1200px;
  background-color: #8B4000;
  border: solid 1px black;
  box-shadow: 10px 5px 5px black;
  padding: 20px;
  

  section {
    display: flex;
    align-items: center;
    height: 300px;
    padding: 20px;
    width: 100%;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    margin-right: 20px;
  }

  .lectures-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    height: 100%;
    margin-right: 15px;
    max-width: 250px;
    text-align: right;
    overflow-wrap: break-word;
    padding: 10px;
  }
`;

export default UniqueModule;
