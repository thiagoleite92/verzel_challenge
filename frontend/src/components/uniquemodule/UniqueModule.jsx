import styled from 'styled-components';

const UniqueModule = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 400px;
  width: 1000px;
  background-color: #8B4000;
  border: solid 1px black;
  box-shadow: 10px 5px 5px black;
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
  }

  .lectures-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    padding: 20px;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
  }
  
`;

export default UniqueModule;
