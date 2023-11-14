import React from "react";
import { Alert, AlertTitle, Stack } from "@mui/material";

// severity yazarak success, error, warning gibi terimleri kullanabilirsin.
// default olarak success olarak gelir.

// alertlere bir title yazmak istersen alertTitle kullanabilirsin.
export const LessonAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert>
        <AlertTitle>Success Title</AlertTitle>
        Success Alert Message
      </Alert>
      <Alert severity="error">
        <AlertTitle>Success Title</AlertTitle>
        Error Alert Message
      </Alert>
      <Alert severity="info">
        <AlertTitle>Success Title</AlertTitle>
        Info Alert Message
      </Alert>
      <Alert severity="warning">Warning Alert Message</Alert>
    </Stack>
  );
};
