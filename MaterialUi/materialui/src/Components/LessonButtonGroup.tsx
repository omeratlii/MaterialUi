import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material';

// buton gruplarını içerisine butonları koyup hizalamak için kullanıyoruz.
// aynı butonda olduğu gibi 3 farklı türümüz var. contained, outlined ve text.
// orientation diyerek default olarak yan yana sıralanan butonları dikey sıralayabiliriz.
// size diyerek boyutunu, color diyerek rengini değiştirebiliriz

export const LessonButtonGroup = () => {
  return (
    <Stack direction="row">
        <ButtonGroup variant='contained'>
            <Button>buton</Button>
            <Button>buton</Button>
            <Button>buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined'>
            <Button>buton</Button>
            <Button>buton</Button>
            <Button>buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='text' orientation='vertical'>
            <Button>buton</Button>
            <Button>buton</Button>
            <Button>buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' orientation='vertical' size='small' color='warning'>
            <Button>buton</Button>
            <Button>buton</Button>
            <Button>buton</Button>
        </ButtonGroup>
    </Stack>
  )
}
