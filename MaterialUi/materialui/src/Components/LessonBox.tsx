import React from "react";
import { Box } from "@mui/material";

// div olarak düşünebiliriz. css özellikleri vererek ana kapsayıcı div olarak kullanılıyor.
export const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        width: "100px",
        height: "100px",
        padding: "20px",
        textAlign: "center",
        "&:hover" : { backgroundColor: "primary.light"} // hover efekti vermek için &:hover kullanıyoruz
      }}
    >
      LessonBox
    </Box>
  );
};
