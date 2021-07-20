import styled from 'styled-components';

export const ErrorWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > button {
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    width: 100px;
    height: 30px;
    border: none;
    outline: none;

    &:hover {
      curosr: pointer;
    }
  }
`