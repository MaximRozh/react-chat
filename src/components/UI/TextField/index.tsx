import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputFieldProps {
  name?: string;
  type?: string;
  handleShowPassword?: () => void;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = React.forwardRef<any, any>(
  ({ name, type, handleShowPassword, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        name={name}
        type={type}
        variant="outlined"
        required
        fullWidth
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
        {...props}
      />
    );
  }
);

export default InputField;
