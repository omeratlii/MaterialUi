import React, { useState } from "react";
import { Select, Box, TextField, MenuItem } from "@mui/material";

// Select içerisine bir option basmak istersek bunu MenuItem ile yapıyoruz. Html'deki option gibi düşün.
export const LessonSelect = () => {
  const [value, setValue] = useState<string[]>([]);
  console.log(value);

  return (
    // box değerine sabit olarak bir width değeri verdik daha sonra menu itemların bu width değerine oturması için fullwidth özelliğini kullanıyoruz.
    <Box width="250px">
      {/* <TextField
        label="Ülke seçiniz"
        select
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)} // bunu uzun yoldan yapmak istersek bir metoda atayıp üstte arrow function ile yazabiliriz.
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="IT">Italy</MenuItem>
        <MenuItem value="GR">Greece</MenuItem>
      </TextField> */}


      {/* Çoklu seçim için select kullanımı. useState'i normalde boş string olarak kullandık üstteki örnekte fakat çoklu seçimde boş array olması gerekiyor. */}

      <TextField
        SelectProps={{
          multiple: true, // çoklu select yapmak istersek aynı input propsta olduğu gibi select props kullanarak multiple true diyoruz.
        }}
        label="Ülke seçiniz"
        select
        fullWidth
        value={value}
        onChange={(e) =>
          setValue(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        }
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="IT">Italy</MenuItem>
        <MenuItem value="GR">Greece</MenuItem>
      </TextField>
    </Box>
  );
};
