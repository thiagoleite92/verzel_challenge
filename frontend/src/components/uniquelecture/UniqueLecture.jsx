import styled from 'styled-components';

const UniqueLecture = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 400px;
  width: 700px;
  background-color: #8B4000;
  border: solid 1px black;
  box-shadow: 10px 5px 5px black;
  padding: 20px;
  text-transform: justify;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

`;

export default UniqueLecture;
