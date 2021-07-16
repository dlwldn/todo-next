import styled from 'styled-components';

export const TodoHeader = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: 0 2px #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;

  & > h1 {
    font-size: 25px;
    font-weight: 700;
  }

  & > span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    & > svg {
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  & > button {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    background: unset;
    outline: none;
    border: none;

    & > svg {
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

