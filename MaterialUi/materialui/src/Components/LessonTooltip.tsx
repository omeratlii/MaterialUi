import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// üzerine geldiğimiz componentin açıklamasını yazar.
// açıklama kısmında dafault olarak alt kısımda gelir, değiştirmek için placement kullanabilirsin.
export const LessonTooltip = () => {
  return (
    <Tooltip title="Sil" placement="right">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};