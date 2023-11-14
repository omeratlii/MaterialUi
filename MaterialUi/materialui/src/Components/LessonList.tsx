import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";


// ListItemların kendinden bir padding değeri var eğer istemiyorsan disabledpadding diyebilirsin.
// Listeye ikon eklemek için ListItemIcon, text eklemek için ListItemText primary kullanabilirsin.

// üstteki örneklerde ikon var alttaki örneklerde ikon bulunmuyor.
export const LessonList = () => {
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
