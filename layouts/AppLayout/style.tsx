import styled from 'styled-components';

export const AppLayoutWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 370px;
  }
`