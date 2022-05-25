import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flexSet("", "center", "column")}
  position: relative;
  min-width: 1200px;
  height: 100vh;
  overflow-x: hidden;
`;
