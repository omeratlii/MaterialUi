import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';


export const LessonRadioGroup = () => {
    const [value, setValue] = useState("")

  return (
    <FormControl>
        <FormLabel>Maaş Beklentiniz</FormLabel>
        <RadioGroup row name='extected-salary' value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel label="1800$" value="1800" control={<Radio color='secondary'/>}/>
            <FormControlLabel label="2000$" value="2000" control={<Radio color='warning'/>}/>
            <FormControlLabel label="2200$" value="2200" control={<Radio/>}/>
        </RadioGroup>
        <FormHelperText>Lütfen aklınızdaki maaşı seçiniz</FormHelperText>
    </FormControl>
  )
}
