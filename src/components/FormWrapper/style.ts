import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }: any): any => {
  return {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    width: "400px",
    padding: "50px",
    border: " 1px solid #dedede",
    margin: "50px auto",
  };
});
