import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";


// animasyonlu örnekleri material ui sitesinde mevcut onlara da göz atabilirsin.
// dikkat etmen gereken şey onClick ve onClose ile dialogu kapatmak.
export const LessonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Dialogu aç</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hangi Framework?</DialogTitle>
        <DialogContent>
            <DialogContentText>En çok hangi frontend frameworkünü seviyorsun?</DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>React</Button>
            <Button onClick={() => setDialogOpen(false)}>Angular</Button>
            <Button onClick={() => setDialogOpen(false)}>Vue</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
