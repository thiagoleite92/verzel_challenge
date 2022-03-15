import styled from 'styled-components';

const NewLectureForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #8B4000;
    border-bottom: solid 3px black;
    height: 400px;
    width: 350px;
    border: solid 1px black;
    box-shadow: 10px 5px 5px black;
    margin: auto;

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
      width: 200px;
    }
`;

export default NewLectureForm;
