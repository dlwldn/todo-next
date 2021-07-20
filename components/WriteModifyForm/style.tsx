import styled from "styled-components";

export const AddWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 80%;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  & > button {
    width: 80%;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }
`