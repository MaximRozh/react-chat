import React from "react";
import { Typography } from "@mui/material";

import { StyledPaper } from "./style";

interface FormWrapperProps {
  children: React.ReactNode;
  title?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, title }) => {
  return (
    <StyledPaper>
      {title ? (
        <Typography variant="h5" textAlign="center">
          {title}
        </Typography>
      ) : null}
      {children}
    </StyledPaper>
  );
};

export default FormWrapper;
