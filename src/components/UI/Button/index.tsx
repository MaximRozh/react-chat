import React from "react";
import Button from "@mui/material/Button";

const MyButton: React.FC<any> = ({
  children,
  onClick,
  variant,
  color,
  style,
  type,
  disabled,
  size,
  fullWidth,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      style={style}
      type={type}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};

export default MyButton;
