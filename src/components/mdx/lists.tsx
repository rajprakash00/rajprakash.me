import { Children, HTMLAttributes, PropsWithChildren } from "react";
import { GiDiamonds } from "react-icons/gi";
import { isElement } from "react-is";

import { UnorderedListPointer, UnorderedListStyled } from "./styles";

export const ListItem = ({
  children,
  ...props
}: PropsWithChildren<Record<string, unknown>>) => (
  <li {...props}>
    <UnorderedListPointer />
    {children}
  </li>
);

export const UnorderedList = (props: HTMLAttributes<HTMLUListElement>) => (
  <UnorderedListStyled {...props}>
    {Children.map(props.children, (child) => {
      if (isElement(child)) {
        const childProps = child.props;
        return <ListItem {...childProps} />;
      }
      return null;
    })}
  </UnorderedListStyled>
);
