import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";


// basit bir useState kullanarak datePicker ve timePicker elde edebiliyoruz. importları düzgün yüklemen yeterli.
// timePicker normalde default olarak kötü bir biçimde geliyor fakat renderTimeViewClock kullanarak görselliğini level atlatabiliriz.
export const LessonDateTime = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  console.log(value);
  return (
    <Stack spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Tarih"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />

        {/* timePicker'ı default olarak kullanmak istersen viewRenderes kullanmana gerek yok. */}
        <TimePicker
          label="Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </LocalizationProvider>
    </Stack>
  );
};
