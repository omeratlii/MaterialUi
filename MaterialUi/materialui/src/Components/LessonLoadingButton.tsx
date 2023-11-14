import React, { useState } from 'react'
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab"



// butona bastın ve backend'e istek attın o sırada ikinci, üçüncü, dördüncü basışın önüne geçmek için loadingButton kullanıyoruz.
// bir istek gönderdikten sonra cevap alana kadar butona bir daha basmamızı engeller.
// loading özelliği ile ne zaman basmayı engellemek istediğini kontrol edebilirsin.
// sadece loading yazarsan true anlamına gelir.
export const LessonLoadingButton = () => {
    const [value, setValue] = useState(false)
  return (
    <Stack direction="row">
        <LoadingButton loading>Kaydet</LoadingButton>
        <LoadingButton loading={value} variant='contained' onClick={() => {setValue(true)}}>Kaydet</LoadingButton>
    </Stack>
  )
}
