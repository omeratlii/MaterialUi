import React from "react";
import { Paper, Box } from "@mui/material";

// elevation ile gölge değerini ayarlayabiliyoruz. border-radius özelliği dafeult olarak geliyor kapatmak için square vermek yeterli
export const LessonPaper = () => {
  return (
    <Box sx={{display: "flex", gap: "10px"}}>
      <Paper sx={{ width: 100, height: 100 }} />
      <Paper sx={{ width: 100, height: 100 }} elevation={0}/>
      <Paper sx={{ width: 100, height: 100 }} elevation={3}/>
      <Paper sx={{ width: 100, height: 100 }} variant="outlined" square/>
    </Box>
  );
};
