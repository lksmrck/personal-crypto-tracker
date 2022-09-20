import React from "react";
import { StyledBackdrop } from "./styled";

type BackdropProps ={
    children: React.ReactNode
}

export default function Backdrop(props: BackdropProps) {
  return <StyledBackdrop>{props.children}</StyledBackdrop>;
}