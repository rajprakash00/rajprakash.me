import styled, { css } from "styled-components";

export const SocialLinksContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 25px;
  place-items: center;
  justify-content: center;
  padding: 10px 0;

  @media only screen and (max-width: 764px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;
    padding: 10px 3rem;
  }
`;

export const SocialIcon = styled.a`
  font-size: 25px;
  display: flex;
  align-items: center;
  color: var(--color-primary)
`;
