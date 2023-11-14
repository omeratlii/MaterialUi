import React from "react";
import { Grid, Box } from "@mui/material";

// Bootstraptaki grid yapısına benziyor. En dışa kapsayıcı bir row atıyoruz ve kaça bölmek istersek işlemleri öyle yapıyoruz.
// Kapsayıcı gride container diyerek row görevi görmesini sağlıyoruz.

// 12 birimi aştığında otomatik olarak alt satıra geçer.
// responsive hale getirmek için xs, md, xl gibi kavramları kullanabilirsin. Aynı bootstrap mantığı gibi.
export const LessonGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={12} md={8}>8 birimlik yer</Grid>
        <Grid xs={12} md={4}>4 birimlik yer</Grid>
        <Grid xs={12} md={8}>8 birimlik yer</Grid>
        <Grid xs={12} md={4}>4 birimlik yer</Grid>
      </Grid>
    </Box>
  );
};
