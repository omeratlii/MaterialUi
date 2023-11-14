import React from 'react'
import { CircularProgress, LinearProgress ,Stack } from "@mui/material";

// çok çeşitli proggress/loading mevcut daha fazla örneğe material ui'dan ulaşabilirsin.
// variant kullanarak seçili bir yüzdede sabit gösterim yapabilirsin.
// variant'tan sonra hangi yüzdede sabit gözükmesini istiyorsan onu value içerisine gir.
export const LessonProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress/>
        <CircularProgress color='warning'/>
        <CircularProgress variant='determinate' value={55}/>
        <LinearProgress color='success'/>
        <LinearProgress variant='determinate' value={25} color='success'/>
    </Stack>
  )
}
