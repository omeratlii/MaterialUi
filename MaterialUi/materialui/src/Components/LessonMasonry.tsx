import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const heights = [300, 60, 180, 140, 180, 200, 300, 60, 100, 160];
// üstte tanımladığımız heights dizisindeki heightları map ile tek tek döndük
// döndüğümüz değerleri accordionda minHeight ile verdik. 
// key hatası aldığımızda hepsinin indexi farklı olduğu için index vererek düzelttik.
export const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion elevation={0} sx={{ minHeight: height }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion {index + 1}
            </AccordionSummary>
            <AccordionDetails>Contents</AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};
