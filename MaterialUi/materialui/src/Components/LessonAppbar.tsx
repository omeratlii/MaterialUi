import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

export const LessonAppbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openControl = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon sx={{color: "white"}} />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ marginRight: "auto" }}>
          Menu
        </Typography>
        {/* Stacklerin default hali direction column olduğu için row'a çektik. çünkü yan yana görmek istiyoruz */}
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }}>Ürünler</Button>
          <Button sx={{ color: "white" }}>Fiyatlar</Button>
          <Button sx={{ color: "aquamarine", fontWeight: "600" }} onClick={handleClick}>
            İndirimdekiler
          </Button>
        </Stack>

        {/* anchorEl ile menunun nerede açılmasını istediğimizi belirtiyoruz. İndirimdekiler butonuna basılınca açılacak
        open ile açılışını kontrol ediyoruz. eğer open true ise açılacak
        onClose ile kapanmasını kontrol ettik. herhangi bir menuitem'a ya da herhangi bir yere tıklandığında kapanacak */}

        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
          <MenuItem onClick={handleClose}>Defterler</MenuItem>
          <MenuItem onClick={handleClose}>Kalemler</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
