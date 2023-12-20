import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: sticky;
  padding: 0 20px 20px;
  text-align: center;
  font-size: 0.8em;
  top: 100vh;

  & > a {
    color: var(--color-primary);
  }
`;
