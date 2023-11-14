import React, { useState } from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// miui sitesinde çok daha kapsamlı ve güzel örnekler var. onlara çalışabilirsin.

export const LessonDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
      // anchor kullanarak nerede açılmasını istediğimizi belirleyebiliriz. default olarak left gelir. top, bottom ve right kullanabilirsin
      anchor="right"
      open={isOpen}
      onClose={() => setIsOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Sol Taraf Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
