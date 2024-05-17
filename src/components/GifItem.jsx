import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const GifItem = ({ title, url, id }) => {
  const copyImg = async () => {
    await navigator.clipboard.writeText(url);
  };
  return (
    <Card>
      <CardMedia component="img" height="200" image={url} alt={title} />
      <CardContent>
        <Typography variant="body1" fontWeight={"bold"}>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={copyImg}>
          Compartir
        </Button>
      </CardActions>
    </Card>
  );
};
