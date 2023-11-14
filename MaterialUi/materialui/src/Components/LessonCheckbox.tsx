import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";

export const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowledge, setKnowledge] = useState<string[]>([]);
  console.log(knowledge)

  const handleKnowledgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowledge.indexOf(event.target.value);
    if (index === -1) {
      setKnowledge([...knowledge, event.target.value]); // ...knowledge diyerek spread operatörünü kullandık. Yani eğer array içerisindeki öğeleri döndürecek.
      // örneğin array içerisinde react ve angular var ve yeni bir şey daha seçtik. react ve anguları döndürecek ek olarak yeni seçtiğimiz değeri arraya ekleyecek.
    } else {
      setKnowledge(knowledge.filter((item) => item !== event.target.value));  // seçimi kaldırılan değerleri array'den silme işlemi.
    }
  };
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Ortaokul"
            />
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel control={<Checkbox />} label="Ön Lisans" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lisans"
            />
            <FormControlLabel control={<Checkbox />} label="Yüksek Lisans" />
            <FormControlLabel control={<Checkbox />} label="Doktora" />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="Kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>

      {/* Çoklu checkbox seçimi */}
      <Box>
        <FormControl>
          <FormLabel>Frontend'de Bildiğiniz Frameworkler</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="React JS"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Angular JS"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Vue JS"
            />
            <FormControlLabel
              value="jquery"
              control={
                <Checkbox
                  checked={knowledge.includes("jquery")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="jQuery JS"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
