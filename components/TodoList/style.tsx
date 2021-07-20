import styled from "styled-components";

export const TodoListWrap = styled.li<{ isHome: boolean }>`
  width: 100%;
  height: 100px;
  box-shadow: 0 2px 7px #777;
  margin-bottom: 25px;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  position: relative;

  & > span {
    position: absolute;
    top: 10px;
    right: 25px;
  }

  &:hover {
    cursor: ${props => props.isHome ? 'pointer' : 'unset'};
  }
`