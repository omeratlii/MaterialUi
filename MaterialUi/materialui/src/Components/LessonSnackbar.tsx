import React, { useState } from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


// nerede açılmasını istiyorsan anchorOrigin kullan, default olarak sol altta açılır.
// snackbar içerisinde bir action tanımlamak istersen action kullan ve üstte bunu bir değişkene ata.
// snackbarın kapanma işlemi için hem kendisine hem action içerisindeki butonlara onclick verdik ve handleClose metodu ile kapatma işlemi yaptık.
// snackbarın belirli bir saniye sonra kapanmasını istiyorsan autoHiddenDuration kullan. Tek başına çalışmaz onClose da kullanman gerekir.
export const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  // action özelliğini kullanabilmek için action diye bir değişken oluşturduk ve bunu kullandık.
  const action = (
    <React.Fragment>
      <Button sx={{ color: "lightblue" }} onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>Snackbarı aç</Button>
      <Snackbar
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        open={openSnackbar}
        message="Hata mesajı aldınız"
        action={action}
      />
    </div>
  );
};
