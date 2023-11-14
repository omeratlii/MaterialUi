import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Box, Typography, Divider } from "@mui/material";

// sıralı iş akışı görüntüsü elde etmek istersen kullanabilirsin. ilki en basit ve sade olanı.
// daha cafcaflı olanları mui sitesinde var
// sol taraftaki nokta ve çizgi separator içerisinde, sağ tarafki content kısmı ise ayrı tutuluyor.
export const LessonTimeLine = () => {
  return (
    <Box>
      {/* En basit şekilde dümdüz bir TimeLine */}

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Yemek Ye</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Kod Yaz</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Uyu</TimelineContent>
        </TimelineItem>
      </Timeline>
      <Divider />
      {/* Daha hoş gözüken detaylı TimeLine */}

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 öö
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Yemek Ye
            </Typography>
            <Typography>Karnını doyur öyle gel</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 öö
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Kod Yaz
            </Typography>
            <Typography>Daha sıkı çalışmalısın</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Uyu
            </Typography>
            <Typography>Dinlenmeye ihtiyacın var</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Tekrarla
            </Typography>
            <Typography>Bu boku her gün tekrarla</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
