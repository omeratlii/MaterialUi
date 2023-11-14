import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Button,
} from "@mui/material";

export const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "office") {
      setHelperText("Güzel seçim bro");
      setError(false);
    } else if (value === "himym") {
      setHelperText("Dizi zevkini gözden geçir");
      setError(false);
    } else {
      setHelperText("Lütfen bir seçim yapınız");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Hangi sitcom böğürte böğürte güldürür?</FormLabel>
        <RadioGroup onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel label="Office" value="office" control={<Radio />} />
          <FormControlLabel label="How i met ur mother" value="himym" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};
