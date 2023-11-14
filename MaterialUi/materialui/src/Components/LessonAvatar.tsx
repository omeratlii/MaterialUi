import React from 'react'
import { Avatar, AvatarGroup, Stack } from "@mui/material";


// sx diyerek css özelliği verebiliyoruz.
// fotoğraflı avatarların kapanış etiketi olmuyor direkt açma/kapama aynı.
// variant ile kare ya da yuvarlak görünüm kazandırabilirsin.
// avatargroup içerisine verdiğin max sayısı kadar avatar gözükür fazlası + şeklinde gözükür. 
export const LessonAvatar = () => {
  return (
    <Stack direction="row">
        <AvatarGroup>
            <Avatar sx={{marginRight: "5px"}} src='https://randomuser.me/api/portraits/women/56.jpg'/>
            <Avatar src='https://randomuser.me/api/portraits/men/55.jpg'/>
        </AvatarGroup>
        <AvatarGroup max={3}>
            <Avatar variant='square' sx={{marginRight: "5px", bgcolor: "primary.light", width: 50, height: 50}}>Ömer</Avatar>
            <Avatar sx={{marginRight: "5px", bgcolor: "secondary.light", width: 50, height: 50}}>Elif</Avatar>
            <Avatar sx={{marginRight: "5px", bgcolor: "secondary.light", width: 50, height: 50}}>Elif</Avatar>
            <Avatar sx={{marginRight: "5px", bgcolor: "secondary.light", width: 50, height: 50}}>Elif</Avatar>
        </AvatarGroup>
    </Stack>
  )
}
