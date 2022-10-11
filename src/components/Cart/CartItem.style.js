import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;