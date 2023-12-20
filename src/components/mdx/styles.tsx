import { GiElectric } from "react-icons/gi";
import styled from "styled-components";

export const UnorderedListPointer = styled(GiElectric)`
  color: var(--color-primary);
`;
export const UnorderedListStyled = styled.ul`
  padding-left: 0;
  li {
    display: flex;
    align-items: flex-start;
    list-style: none;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
    &:only-child {
      margin-top: 12px;
    }

    & > svg {
      margin-top: 15px;

      & ~ p {
        flex: 1 1 0%;
        margin: 0;
        padding: 10px 10px;
      }
    }
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 500;
`;
