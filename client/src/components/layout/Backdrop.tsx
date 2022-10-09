import React from "react";
import { StyledBackdrop } from "./styled";

type BackdropProps = {
  children: React.ReactNode;
};

const Backdrop = (props: BackdropProps) => {
  return <StyledBackdrop>{props.children}</StyledBackdrop>;
};

export default Backdrop;
