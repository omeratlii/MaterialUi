import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

// içerisine text girmek için kullanıyoruz. aşağıya indikçe örnekler daha gerçek hayattan olmaya başlıyor.
// label textfield içerisinde yazacak olan texti ifade eder. size ile boyutunu, color ile rengini değiştirebiliriz.
// fiiled, standard ve outlined olmak üzere 3 türden oluşur.
// type'ına password diyerek içerisine girilen yazıyı gizleyebilirsin.
// InputProps diyerek readOnly ve InputAdornment kullanabilirsin. readOnly textin içine yazı yazmana engel olur.
// InputAdornment ise başına(startAdornment) veya sonuna(endAdornment) sabit kalan bir text eklemek istersen kullanılır.
// helperText, textfield'ın altında hatırlatıcı bir mesaj gibi düşün.
// onChange kullanarak en alt örnekte olduğu gibi dinamik bir helperText elde edebilirsin.

export const LessonTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="ad" />
        <TextField label="ad" variant="filled" />
        <TextField label="ad" variant="standard" />

        <TextField label="ad" variant="outlined" size="small" color="warning" />
        <TextField
          label="ad"
          variant="outlined"
          helperText="Lütfen şifrenizi giriniz"
          type="password"
        />
        <TextField
          label="ad"
          variant="outlined"
          helperText="Buraya tıklayamazsın"
          disabled
        />
        <TextField
          label="ad"
          variant="outlined"
          helperText="Buraya yazamazsın"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Toplam"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Toplam"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row">
        <TextField
          label="şifre"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          variant="outlined"
          helperText={!value ? "lütfen şifrenizi giriniz" : "şifrenizi kimseyle paylaşmayınız"}
          type="password"
        />
      </Stack>
    </Stack>
  );
};
