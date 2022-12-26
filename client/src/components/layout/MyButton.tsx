import { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface MyButtonProps {
  text: string;
  blue?: boolean;
  purple?: boolean;
  red?: boolean;
  component?: typeof Link;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "outlined" | "contained";
  type?: string;
  fullWidth?: boolean;
  startIcon?: ReactNode;
}
const MyButton: FC<MyButtonProps> = ({
  text,
  blue,
  purple,
  red,
  component,
  to,
  onClick,
  className,
  variant,
  type,
  fullWidth,
  startIcon,
}) => {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor: blue
          ? "#005980"
          : purple
          ? "#6C1C6A"
          : red
          ? "#B5164E"
          : "#4A1649",
        "&:hover": {
          backgroundColor: blue
            ? "#034866"
            : purple
            ? "#571755"
            : red
            ? "#971140"
            : "#300D2F",
        },
      }}
      component={component}
      to={to}
      onClick={onClick}
      className={className}
      type={type}
      fullWidth={fullWidth}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};
export default MyButton;
