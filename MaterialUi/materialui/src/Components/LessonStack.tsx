import React from "react";
import { Stack, Divider } from "@mui/material";

// Stack ile box birbirine çok benziyor. İkiside kapsayıcı div fakat stack'in kendine has display özelliği var. Display:flex, flex-direction: column olarak geliyor.

// Divider ile kullanabiliriz ancak flexItem vermezsek divider gözükmez.
export const LessonStack = () => {
  return (
    <Stack
      direction={{xs: "column", md:"row"}} // medium cihaz ve altına geçtiğimizde flex-direction: column olacak. Masaüstünde ise yatay göreceğiz.
      justifyContent="center"
      spacing={{xs:1, sm:2, md:4}} // aynı şekilde mobilde ve masaüstünde farklı spacing değerlerini almasını sağlayabiliriz.
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
    </Stack>
  );
};
