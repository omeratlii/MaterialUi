import React from "react";
import { Link, Box } from "@mui/material";

export const LessonLink = () => {
  return (
    // underline hover ile sadece üzerine geldiğinde çizgi çıkmasını sağlayabilirsin. typography'de olduğu gibi renk ve variant verebilirsin.
    // eğer bir href verilmeyecekse component kullanarak buton olarak kullanabilirsin. onClick kullanabilmeni sağlar
    <Box>
      <Link href="https://www.google.com/" underline="none">
        Google'a Git
      </Link>
      <Link
        href="https://www.youtube.com/"
        color="error"
        variant="body2"
        underline="none"
      >
        YouTube'a Git
      </Link>
      <Link
        component="button"
        color="secondary"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Button Link
      </Link>
    </Box>
  );
};
