import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

export const LessonBreadcrumbs = () => {
  return (
    // normalde breadcrumbs / ile ayrılıyor fakat separator kullanarak istediğimiz operatörü kullanabiliriz.
    // maxItems kullanarak breadcrumbs'ta en fazla kaç adet item göstermek istediğimizi seçebiliriz.
    <Breadcrumbs separator=">" maxItems={2}>
      <Link href="/" underline="hover">Anasayfa</Link>
      <Link href="/" underline="hover">Blog</Link>
      <Link underline="none">Ömer Atlı</Link>
      <Link underline="none">Ömer Atlı</Link>
      <Link underline="none">Ömer Atlı</Link>
      <Link underline="none">Ömer Atlı</Link>
    </Breadcrumbs>
  );
};
