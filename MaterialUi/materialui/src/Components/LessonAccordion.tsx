import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {/* Basic dümdüz akordiyon */}
      {/* <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion> */}

      {/* birine tıkladığımızda diğerinin kapanması için ileri düzey akordiyon */}

      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem consequatur omnis veniam blanditiis, ratione laudantium
          eaque perferendis autem nulla est odit natus adipisci quo velit alias
          ipsam dolores exercitationem!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
