import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

// SpeedDial içerisinden icon diyerek ilk başta gözükecek ikonu verdik.
// fakat üzerine gelindiğinde ya da tıklandığında ikonun değişmesi için openIcon kullandık.

// açıldıktan sonra görmek istediğimiz ikonları speeddialaction içerisine yerleştirdik.
// ikonların yanına açıklama yazmak istersen tooltiptitle kullanabilirsin.
// ikonları hangi yöne hizalamak istiyorsan direction kullanabilirsin.
export const LessonSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation"
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      direction="up"
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
};
