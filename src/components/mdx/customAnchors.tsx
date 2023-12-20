import React, { AnchorHTMLAttributes } from "react";
import { Anchor } from "./styles";

const CustomAnchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Anchor target='_blank' rel='noopener noreferrer' {...props} />;
};

export default CustomAnchor;