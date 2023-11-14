import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const LessonBadge = () => {
  // badgecontent içerisine istediğimiz sayıyı verebiliyoruz.
  // color ile renk değişimi, anchorOrigin ile konum değişimi yapabiliyoruz.
  // max içerisine girdiğimiz sayıdan fazlasını badgecontent içerisine yazarsak, max içerisindeki sayı + yazar. örnek max = 40 biz 50 verdik 40+ yazacak.
  return (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={50} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={50} max={40} color="secondary">
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color="success"
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
