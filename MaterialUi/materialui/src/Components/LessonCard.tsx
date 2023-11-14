import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";


// Cardları grid yapısı içerisinde responsive olarak kullandık.
export const LessonCard = () => {
  return (
    <>
      <Box>
        <Grid container justifyContent={"center"}>
          <Grid xs={12} sm={6} md={4} xl={3} marginTop={5}>
            <Card sx={{width: "90%"}}>
              <CardMedia
                height="150px"
                component={"img"}
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <Typography variant="h5" component={"div"}>
                  Başlığım
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium pariatur dolor corporis optio natus, architecto
                  asperiores, rem alias libero veritatis qui, suscipit obcaecati
                  magnam ut est labore? Magnam, provident harum.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Like</Button>
                <Button color="error">Dislike</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3} marginTop={5}>
            <Card sx={{width: "90%"}}>
              <CardMedia
                height="150px"
                component={"img"}
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <Typography variant="h5" component={"div"}>
                  Başlığım
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium pariatur dolor corporis optio natus, architecto
                  asperiores, rem alias libero veritatis qui, suscipit obcaecati
                  magnam ut est labore? Magnam, provident harum.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Like</Button>
                <Button color="error">Dislike</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3} marginTop={5}>
            <Card sx={{width: "90%"}}>
              <CardMedia
                height="150px"
                component={"img"}
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <Typography variant="h5" component={"div"}>
                  Başlığım
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium pariatur dolor corporis optio natus, architecto
                  asperiores, rem alias libero veritatis qui, suscipit obcaecati
                  magnam ut est labore? Magnam, provident harum.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Like</Button>
                <Button color="error">Dislike</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3} marginTop={5}>
            <Card sx={{width: "90%"}}>
              <CardMedia
                height="150px"
                component={"img"}
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <Typography variant="h5" component={"div"}>
                  Başlığım
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium pariatur dolor corporis optio natus, architecto
                  asperiores, rem alias libero veritatis qui, suscipit obcaecati
                  magnam ut est labore? Magnam, provident harum.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Like</Button>
                <Button color="error">Dislike</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
