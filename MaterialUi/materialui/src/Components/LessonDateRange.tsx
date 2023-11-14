import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";


// yine importlar son derece önemli, miui sitesinden sürekli değişen importların güncel hallerini bulup içeriye yüklemen gerekiyor.
// localeText ile labellara düzenleme yapabilirsin
export const LessonDateRange = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
      </LocalizationProvider>
    </Stack>
  );
};
