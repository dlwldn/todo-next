import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: 100%;
    text-align: center;
    margin: 20px;
    font-size: 30px;
    font-weight: 700;
  }

  & > span {
    margin: 20px;
    color: #2E94CC;
    text-decoration: underline;
  }
`

export const LoginContentWrap = styled.form`
  width: 100%;
  padding: 20px;
  box-shadow: 1px 1px 3px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #fff;
    background-color: #000;

    &:hover {
      cursor: pointer;
    }
  }
`

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;

  & > input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #eee;
  }

  & > span {
    font-size: 12px;
    padding: 5px 0;
    color: red;
  }
  
`